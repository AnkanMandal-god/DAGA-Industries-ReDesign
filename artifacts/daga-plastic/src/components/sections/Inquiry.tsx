import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MvcdF_b4";

const formSchema = z.object({
  industry: z.string().min(1, "Please select an industry"),
  volume: z.string().min(1, "Please select estimated volume"),
  categories: z.array(z.string()).refine((v) => v.some((i) => i), {
    message: "Select at least one product category.",
  }),
  specificProducts: z.string().optional(),
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  mobile: z.string().min(10, "Please enter a valid mobile number."),
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof formSchema>;

const stepLabels = ["Industry", "Products", "Contact"];

export function Inquiry() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      volume: "",
      categories: [],
      specificProducts: "",
      fullName: "",
      companyName: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (_data: FormValues) => {
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitted(true);
  };

  const nextStep = async () => {
    let valid = false;
    if (step === 1) valid = await form.trigger(["industry", "volume"]);
    else if (step === 2) valid = await form.trigger(["categories"]);
    if (valid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  return (
    <section id="inquiry" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      {/* Red glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #D32F2F 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Enterprise Portal</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Request a Quote</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-5" />
          <p className="text-white/45 text-base">Fast-track your procurement process with our dedicated enterprise portal.</p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 px-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Quote Request Received</h3>
              <p className="text-white/55 max-w-xs leading-relaxed mb-8">
                Our sales engineering team will contact you within 24 hours with a detailed proposal.
              </p>
              <button
                onClick={() => { setIsSubmitted(false); setStep(1); form.reset(); setCaptchaToken(null); recaptchaRef.current?.reset(); }}
                className="px-6 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <div className="p-8 md:p-10">
              {/* Step progress */}
              <div className="flex items-center gap-0 mb-10">
                {stepLabels.map((label, i) => {
                  const num = i + 1;
                  const active = step === num;
                  const done = step > num;
                  return (
                    <div key={num} className="flex items-center flex-1 last:flex-none">
                      <div className="flex flex-col items-center gap-1">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border-2 transition-all duration-300 ${
                          done ? "bg-primary border-primary text-white" :
                          active ? "bg-primary/15 border-primary text-primary" :
                          "bg-white/5 border-white/15 text-white/30"
                        }`}>
                          {done ? "✓" : num}
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${active ? "text-primary" : done ? "text-white/60" : "text-white/25"}`}>
                          {label}
                        </span>
                      </div>
                      {i < stepLabels.length - 1 && (
                        <div className={`flex-1 h-[2px] mx-2 mb-4 rounded-full transition-all duration-500 ${done ? "bg-primary" : "bg-white/10"}`} />
                      )}
                    </div>
                  );
                })}
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Industry */}
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }} className="space-y-5">
                        <h3 className="text-lg font-black text-white mb-1">Your Industry</h3>
                        <FormField control={form.control} name="industry" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Industry Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-xl bg-white/8 border-white/12 text-white focus:border-primary">
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-slate-900 border-white/10 text-white">
                                <SelectItem value="oil_gas">Oil & Gas</SelectItem>
                                <SelectItem value="paint">Paint & Coatings</SelectItem>
                                <SelectItem value="food">Food Processing</SelectItem>
                                <SelectItem value="agriculture">Agriculture</SelectItem>
                                <SelectItem value="chemicals">Chemicals</SelectItem>
                                <SelectItem value="construction">Construction</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="volume" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Estimated Monthly Volume</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-xl bg-white/8 border-white/12 text-white focus:border-primary">
                                  <SelectValue placeholder="Select volume" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-slate-900 border-white/10 text-white">
                                <SelectItem value="<100">Less than 100 units</SelectItem>
                                <SelectItem value="100-500">100 – 500 units</SelectItem>
                                <SelectItem value="500-2000">500 – 2,000 units</SelectItem>
                                <SelectItem value="2000+">2,000+ units</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )} />
                      </motion.div>
                    )}

                    {/* Step 2: Products */}
                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }} className="space-y-5">
                        <h3 className="text-lg font-black text-white mb-1">Product Interest</h3>
                        <FormField control={form.control} name="categories" render={() => (
                          <FormItem>
                            <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Product Categories</FormLabel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                              {["Industrial Containers", "Food Grade", "Agricultural", "Household"].map((item) => (
                                <FormField key={item} control={form.control} name="categories" render={({ field }) => (
                                  <FormItem className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-primary/40 transition-colors cursor-pointer">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item)}
                                        onCheckedChange={(checked) =>
                                          field.onChange(checked ? [...field.value, item] : field.value.filter((v) => v !== item))
                                        }
                                        className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-medium cursor-pointer text-white/75 text-sm">{item}</FormLabel>
                                  </FormItem>
                                )} />
                              ))}
                            </div>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="specificProducts" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Specific Products / Sizes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., 20L Jerry Cans, 210L Barrels"
                                className="resize-none rounded-xl bg-white/8 border-white/12 text-white placeholder-white/25 focus:border-primary"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )} />
                      </motion.div>
                    )}

                    {/* Step 3: Contact */}
                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }} className="space-y-5">
                        <h3 className="text-lg font-black text-white mb-1">Contact Details</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField control={form.control} name="fullName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder-white/25 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="companyName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Corp" className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder-white/25 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="mobile" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Mobile Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 xxxxx xxxxx" className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder-white/25 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Work Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" className="h-12 rounded-xl bg-white/8 border-white/12 text-white placeholder-white/25 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                        </div>

                        {/* reCAPTCHA */}
                        <div className="pt-2">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={RECAPTCHA_SITE_KEY}
                            theme="dark"
                            onChange={(token) => { setCaptchaToken(token); setCaptchaError(false); }}
                            onExpired={() => setCaptchaToken(null)}
                          />
                          {captchaError && (
                            <p className="text-red-400 text-xs mt-2">Please complete the CAPTCHA to proceed.</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex justify-between items-center pt-6 border-t border-white/8 mt-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 text-sm font-semibold transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    ) : <div />}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-200"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-200"
                      >
                        <Send className="w-4 h-4" /> Submit Inquiry
                      </button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
