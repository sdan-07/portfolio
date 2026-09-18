import { FormEvent } from "react";
import {
  Mail,
  Clock3,
  Code2,
  Globe,
  Send,
} from "lucide-react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("Message dispatched successfully to Soumyadip Dan.");
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-2 sm:pt-4">
      <div className="relative overflow-hidden rounded-xl border-hairline bg-surface-container-low/80 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="grid min-w-0 grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — CONTACT INFO */}
          <div className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-primary sm:text-xs">
              05 // Contact
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-on-surface sm:text-3xl md:text-[2.5rem]">
              Get In touch.
            </h2>

            <p className="max-w-xl text-sm leading-6 text-on-surface-variant sm:leading-relaxed">
              I am actively seeking full-time Software Engineering / Web
              Development roles starting immediately. Open to remote or
              on-site opportunities.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 pt-1">
              <ContactItem
                icon={Mail}
                text="soumyadipdan7@gmail.com"
              />

              <ContactItem
                icon={Clock3}
                text="IST / UTC+5:30 • Typically responds in < 2 hrs"
              />

              <ContactLink
                icon={Code2}
                text="Github"
                href="https://github.com/sdan-07"
              />

              <ContactLink
                icon={Globe}
                text="LinkedIn"
                href="https://linkedin.com/in/soumyadip-dan-538320303"
              />
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="min-w-0 rounded-lg border-hairline bg-surface-container-lowest/90 p-4 sm:p-6 md:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <Input
                  label="NAME"
                  name="name"
                  placeholder="e.g. Alex Doe"
                  required
                />

                <Input
                  label="ELECTRONIC MAIL"
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  required
                />
              </div>

              {/* Role */}
              <Input
                label="ROLE / POSITION HIRING FOR"
                name="project"
                placeholder="e.g. Software Engineer, SDE Intern"
              />

              {/* Message */}
              <label className="block space-y-1.5">
                <span className="font-mono text-[10px] text-outline sm:text-xs">
                  MESSAGE
                </span>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or opportunity..."
                  className="w-full min-w-0 resize-y rounded border border-outline-variant/30 bg-surface-container px-3 py-2.5 text-sm leading-relaxed outline-none transition-colors placeholder:text-outline/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>

              {/* Footer */}
              <div className="flex flex-col gap-4 border-t border-outline-variant/20 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:border-0 sm:pt-2">
                <span className="font-mono text-[10px] text-outline sm:text-xs">
                  ● 256-bit TLS encrypted
                </span>

                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-on-surface px-5 py-3 text-sm font-medium text-surface-container-lowest transition-colors hover:bg-primary-container sm:w-auto sm:px-6 sm:py-2.5"
                >
                  Send Message

                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block min-w-0 space-y-1.5">
      <span className="font-mono text-[10px] text-outline sm:text-xs">
        {label}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full min-w-0 rounded border border-outline-variant/30 bg-surface-container px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-outline/60 focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}

function ContactItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-surface-container text-primary">
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <span className="min-w-0 break-words pt-1 font-mono text-xs leading-relaxed text-on-surface sm:text-sm">
        {text}
      </span>
    </div>
  );
}

function ContactLink({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ElementType;
  text: string;
  href: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-surface-container text-primary">
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="min-w-0 break-all pt-1 text-xs leading-relaxed text-primary hover:underline sm:text-sm"
      >
        {text}
      </a>
    </div>
  );
}