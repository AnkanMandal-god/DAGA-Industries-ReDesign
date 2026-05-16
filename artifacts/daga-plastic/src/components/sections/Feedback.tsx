import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MvcdF_b4";

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  interestedItems: string;
  comments: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  interestedItems: "",
  comments: "",
};

export function Feedback() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (!captchaToken) { setCaptchaError(true); return; }
    setCaptchaError(false);
    setSubmitted(true);
  };

  const fields = [
    { name: "name" as const, label: "Your Name *", type: "text" },
    { name: "email" as const, label: "Your Email Address *", type: "email" },
    { name: "phone" as const, label: "Phone Number", type: "tel" },
    { name: "address" as const, label: "Your Address", type: "text" },
    { name: "interestedItems" as const, label: "Interested Items / Products", type: "text" },
  ];

  return (
    <section id="feedback" className="py-24 bg-[#0d1117] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #D32F2F 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Feedback</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-white/45 text-sm uppercase tracking-widest">
            Please fill in the details, so that we can get in touch with you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-3">Thank You!</h3>
              <p className="text-white/55 leading-relaxed max-w-xs">
                Your feedback has been received. Our team will get in touch with you shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); setCaptchaToken(null); recaptchaRef.current?.reset(); }}
                className="mt-8 px-6 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-4">
              {fields.map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={form[field.name]}
                    onChange={handleChange}
                    data-testid={`input-feedback-${field.name}`}
                    className={`w-full bg-white/6 border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:bg-white/10 transition-all duration-200 ${
                      errors[field.name] ? "border-red-500/60 focus:border-red-500" : "border-white/12 focus:border-primary/60"
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <div>
                <textarea
                  name="comments"
                  placeholder="Comments / Message"
                  value={form.comments}
                  onChange={handleChange}
                  rows={4}
                  data-testid="input-feedback-comments"
                  className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* reCAPTCHA */}
              <div className="pt-1">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  theme="dark"
                  onChange={(token) => { setCaptchaToken(token); setCaptchaError(false); }}
                  onExpired={() => setCaptchaToken(null)}
                />
                {captchaError && (
                  <p className="text-red-400 text-xs mt-2">Please complete the CAPTCHA to submit.</p>
                )}
              </div>

              <button
                type="submit"
                data-testid="button-feedback-submit"
                className="w-full bg-primary hover:bg-primary/85 text-white font-bold py-4 rounded-full text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-2"
              >
                <Send className="w-4 h-4" />
                Submit Feedback
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
