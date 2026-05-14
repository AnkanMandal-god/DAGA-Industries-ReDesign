import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="feedback" className="py-24 bg-[#0d1117] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      {/* Red glow bottom-left */}
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
          <p className="text-white/50 text-sm uppercase tracking-widest">
            Please fill in the details, so that we can get in touch with you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-black mb-3">Thank You!</h3>
              <p className="text-white/60 leading-relaxed max-w-xs">
                Your feedback has been received. Our team will get in touch with you shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="mt-8 px-6 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-4">
              {[
                { name: "name", label: "Your Name", type: "text", required: true },
                { name: "email", label: "Your Email Address", type: "email", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: false },
                { name: "address", label: "Your Address", type: "text", required: false },
                { name: "interestedItems", label: "Interested Items / Products", type: "text", required: false },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={form[field.name as keyof FormState]}
                    onChange={handleChange}
                    required={field.required}
                    data-testid={`input-feedback-${field.name}`}
                    className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all duration-200"
                  />
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
