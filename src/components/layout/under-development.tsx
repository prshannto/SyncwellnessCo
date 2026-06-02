import Link from "next/link";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

type UnderDevelopmentProps = {
  pageName: string;
};

export function UnderDevelopment({ pageName }: UnderDevelopmentProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-cream via-beige-50 to-sage-50 px-4">
      <div className="mb-12">
        <Logo />
      </div>
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-100">
          <Construction className="h-8 w-8 text-sage-600" />
        </div>
        <h1 className="font-display text-3xl font-semibold text-sage-900 sm:text-4xl">
          Page Under Development
        </h1>
        <p className="mt-4 text-sage-600">
          Our <span className="font-medium text-sage-800">{pageName}</span> page
          is being crafted with care. Check back soon for something beautiful.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
