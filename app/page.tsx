import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";

import { Button } from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <Accordion type="single" collapsible className="m-auto w-[500px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant="secondary" className="m-auto">
        Secondary
      </Button>
      <Button variant="destructive" className="m-auto">
        Destructive
      </Button>
      <div className="m-auto">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
