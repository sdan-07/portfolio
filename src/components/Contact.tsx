import { FormEvent } from "react";
import MaterialIcon from "./MaterialIcon";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("Message dispatched successfully to Alex Rivera.");
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-4">
      <div className="relative overflow-hidden rounded-xl border-hairline bg-surface-container-low/80 p-8 md:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-wider text-primary">05 // Contact</div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-[2.5rem]">
              Get In touch.
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              I am actively seeking full-time Software Engineering / Web Development roles starting immediately. Open to remote or on-site opportunities.
            </p>

            <div className="space-y-3">
              <ContactItem icon="mail" text="soumyadipdan7@gmail.com" />
              <ContactItem icon="schedule" text="IST / UTC+5:30 • Typically responds in < 2 hrs" />
              <ContactLink icon="code" text="github.com/sdan-07" href="https://github.com/sdan-07" />
              <ContactLink icon="link" text="linkedin.com/in/soumyadip-dan-538320303" href="https://linkedin.com/in/soumyadip-dan-538320303" />
            </div>
          </div>

          <div className="rounded-lg border-hairline bg-surface-container-lowest/90 p-6 lg:col-span-7 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="NAME" name="name" placeholder="e.g. Alex Doe" required />
                <Input label="ELECTRONIC MAIL" name="email" type="email" placeholder="name@email.com" required />
              </div>

              <Input label="ROLE / POSITION HIRING FOR" name="project" placeholder="e.g. Software Engineer, SDE Intern" />

              <label className="block space-y-1.5">
                <span className="font-mono text-xs text-outline">MESSAGE</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the role or opportunity..."
                  className="w-full resize-none rounded border border-outline-variant/30 bg-surface-container px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-xs text-outline">● 256-bit TLS encrypted</span>
                <button type="submit" className="cursor-pointer flex items-center gap-2 rounded bg-on-surface px-6 py-2.5 text-sm font-medium text-surface-container-lowest hover:bg-primary-container">
                  Send Message <MaterialIcon className="text-base">send</MaterialIcon>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", placeholder, required = false }: {
  label: string; name: string; type?: string; placeholder: string; required?: boolean;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="font-mono text-xs text-outline">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded border border-outline-variant/30 bg-surface-container px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}

function ContactItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded bg-surface-container text-primary">
        <MaterialIcon className="text-lg">{icon}</MaterialIcon>
      </span>
      <span className="font-mono text-sm">{text}</span>
    </div>
  );
}

function ContactLink({ icon, text, href }: { icon: string; text: string; href: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded bg-surface-container text-primary">
        <MaterialIcon className="text-lg">{icon}</MaterialIcon>
      </span>
      <a href={href} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">{text}</a>
    </div>
  );
}