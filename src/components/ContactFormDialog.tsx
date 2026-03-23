import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const TG_BOT_TOKEN = "8432570310:AAGY6L4Y4YN8EqAwa9ApoYzeZu2GSwJpGLU";
const TG_CHAT_ID = "6387767953";
const NOTIFY_EMAIL = "cmhyun@gmail.com";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { t } = useLanguage();
  const f = t.contactForm;

  const [form, setForm] = useState({
    name: "",
    org: "",
    contact: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const isValid = form.name.trim() && form.contact.trim() && form.message.trim();

  const sendToTelegram = async () => {
    const text = [
      `[ADWB 강의 문의]`,
      ``,
      `이름: ${form.name}`,
      `소속: ${form.org || "-"}`,
      `연락처: ${form.contact}`,
      ``,
      `문의 내용:`,
      form.message,
    ].join("\n");

    const res = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!res.ok) throw new Error("Telegram send failed");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);
    try {
      await sendToTelegram();
      toast.success(f.successMessage);
      setForm({ name: "", org: "", contact: "", message: "" });
      onOpenChange(false);
    } catch {
      // Telegram failed - fallback to mailto
      const subject = encodeURIComponent(`[ADWB 강의 문의] ${form.name}`);
      const body = encodeURIComponent(
        `이름: ${form.name}\n소속: ${form.org || "-"}\n연락처: ${form.contact}\n\n${form.message}`
      );
      window.open(`mailto:${NOTIFY_EMAIL}?subject=${subject}&body=${body}`, "_blank");
      toast.info(f.fallbackMessage);
      onOpenChange(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#0f1729] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">{f.title}</DialogTitle>
          <DialogDescription className="text-white/60">{f.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white/80">
              {f.nameLabel} <span className="text-red-400">*</span>
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={update("name")}
              placeholder={f.namePlaceholder}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-sky"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="org" className="text-white/80">{f.orgLabel}</Label>
            <Input
              id="org"
              value={form.org}
              onChange={update("org")}
              placeholder={f.orgPlaceholder}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-sky"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact" className="text-white/80">
              {f.contactLabel} <span className="text-red-400">*</span>
            </Label>
            <Input
              id="contact"
              value={form.contact}
              onChange={update("contact")}
              placeholder={f.contactPlaceholder}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-sky"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white/80">
              {f.messageLabel} <span className="text-red-400">*</span>
            </Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={update("message")}
              placeholder={f.messagePlaceholder}
              rows={4}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-sky resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={!isValid || sending}
            className="w-full bg-sky hover:bg-sky/90 text-white font-semibold h-11"
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {f.sendingButton}
              </>
            ) : (
              f.submitButton
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
