import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Star } from "lucide-react";

export default function PropertyListing() {
  return (
    <Card className="max-w-[320px] overflow-hidden">
      <Image
        src="/placeholder.svg?height=200&width=320"
        alt="Penthouse view"
        width={320}
        height={200}
        className="w-full object-cover"
      />
      <CardContent className="p-4">
        <div className="mb-2 flex items-center space-x-2">
          <Badge
            variant="secondary"
            className="bg-pink-100 text-pink-800 hover:bg-pink-100"
          >
            PLUS
          </Badge>
          <span className="text-xs font-semibold uppercase text-pink-800">
            Verified • Cape Town
          </span>
        </div>
        <h2 className="mb-2 text-xl font-semibold leading-tight">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </h2>
        <p className="mb-2 text-lg font-medium">$119/night</p>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm">
            <strong>4.84</strong> (190)
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
