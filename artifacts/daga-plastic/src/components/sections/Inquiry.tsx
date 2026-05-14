import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  industry: z.string().min(1, "Please select an industry"),
  volume: z.string().min(1, "Please select estimated volume"),
  categories: z.array(z.string()).refine(value => value.some(item => item), {
    message: "You have to select at least one item.",
  }),
  specificProducts: z.string().optional(),
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  mobile: z.string().min(10, "Please enter a valid mobile number."),
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof formSchema>;

export function Inquiry() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await form.trigger(["industry", "volume"]);
    } else if (step === 2) {
      isValid = await form.trigger(["categories"]);
    }
    
    if (isValid) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => setStep(s => s - 1);

  return (
    <section id="inquiry" className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Request a Bulk Quote</h2>
          <p className="text-muted-foreground text-lg">Fast-track your procurement process with our dedicated enterprise portal.</p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl border border-border/50">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Quote Request Received</h3>
              <p className="text-muted-foreground mb-8">Our sales engineering team will contact you within 24 hours with a detailed proposal.</p>
              <Button onClick={() => { setIsSubmitted(false); setStep(1); form.reset(); }} variant="outline">
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors ${
                    step >= num ? "bg-primary border-primary text-white" : "bg-white border-muted text-muted-foreground"
                  }`}>
                    {num}
                  </div>
                ))}
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <h3 className="text-xl font-bold border-b pb-2 mb-6">1. Your Industry</h3>
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-none h-12">
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="oil_gas">Oil & Gas</SelectItem>
                                  <SelectItem value="paint">Paint & Coatings</SelectItem>
                                  <SelectItem value="food">Food Processing</SelectItem>
                                  <SelectItem value="agriculture">Agriculture</SelectItem>
                                  <SelectItem value="chemicals">Chemicals</SelectItem>
                                  <SelectItem value="construction">Construction</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="volume"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Monthly Volume</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-none h-12">
                                    <SelectValue placeholder="Select volume" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="<100">Less than 100 units</SelectItem>
                                  <SelectItem value="100-500">100 - 500 units</SelectItem>
                                  <SelectItem value="500-2000">500 - 2000 units</SelectItem>
                                  <SelectItem value="2000+">2000+ units</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <h3 className="text-xl font-bold border-b pb-2 mb-6">2. Product Interest</h3>
                        <FormField
                          control={form.control}
                          name="categories"
                          render={() => (
                            <FormItem>
                              <div className="mb-4">
                                <FormLabel className="text-base">Product Categories</FormLabel>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Industrial Containers", "Food Grade", "Agricultural", "Household"].map((item) => (
                                  <FormField
                                    key={item}
                                    control={form.control}
                                    name="categories"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={item}
                                          className="flex flex-row items-start space-x-3 space-y-0 bg-muted/20 p-4 border"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(item)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...field.value, item])
                                                  : field.onChange(
                                                      field.value?.filter(
                                                        (value) => value !== item
                                                      )
                                                    )
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer">
                                            {item}
                                          </FormLabel>
                                        </FormItem>
                                      )
                                    }}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="specificProducts"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Specific Products / Sizes (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="e.g., 20L Jerry Cans, 210L Barrels" 
                                  className="resize-none rounded-none" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <h3 className="text-xl font-bold border-b pb-2 mb-6">3. Contact Details</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" className="rounded-none h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Acme Corp" className="rounded-none h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mobile Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 xxxxx xxxxx" className="rounded-none h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Work Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@company.com" className="rounded-none h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between pt-8 border-t mt-8">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep} className="rounded-none px-8">
                        Back
                      </Button>
                    ) : <div></div>}
                    
                    {step < 3 ? (
                      <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 rounded-none px-8">
                        Next Step
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-none px-8">
                        Submit Inquiry
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
