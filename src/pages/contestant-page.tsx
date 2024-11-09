import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ContestantProfileProps {
  contestant?: {
    name: string
    age: number
    profession: string
    origin: string
    enteredWith: string
    pairName: string
    bio: string
    status: "WINNER" | "OUT"
    videoId: string
    navigation: {
      prev: { name: string; slug: string }
      next: { name: string; slug: string }
    }
  }
}

export default function ContestantPage({
  contestant = {
    name: "Kellyrae",
    age: 33,
    profession: "Professional singer",
    origin: "Delta State",
    enteredWith: "His wife, Kassia",
    pairName: "DoubleKay",
    bio: "Not only is he the last born but he is also the go-to person for his family members, although communication has subsided since the passing of their mother. The singer believes that his presence in the house will draw in viewers that he is ready to showcase his talent on the biggest stage in Africa.",
    status: "WINNER",
    videoId: "example",
    navigation: {
      prev: { name: "Zion", slug: "zion" },
      next: { name: "Anita", slug: "anita" }
    }
  }
}: ContestantProfileProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto grid gap-8 px-4 py-8 lg:grid-cols-2">
        {/* Left Column - Contestant Info */}
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="flex justify-start">
            <span
              className={`inline-block rounded-full px-4 py-1 text-sm font-bold ${
                contestant.status === "WINNER"
                  ? "border-2 border-black bg-black text-white"
                  : "border-2 border-black"
              }`}
            >
              {contestant.status}
            </span>
          </div>

          {/* Contestant Details */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{contestant.name}</h1>
            <div className="space-y-2">
              <p className="text-lg">
                {contestant.name} ({contestant.age}) {contestant.profession}
              </p>
              <p className="text-lg">Origin: {contestant.origin}</p>
              <p className="text-lg">Entered with: {contestant.enteredWith}</p>
              <p className="text-lg">Pair name: {contestant.pairName}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">{contestant.bio}</p>
            <Button variant="outline" className="border-2 border-black">
              Read more
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t-2 border-black pt-6">
            <Link to={`/`}>
              <Button variant="ghost" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                {contestant.navigation.prev.name}
              </Button>
            </Link>
            <Link to={`/`}>
              <Button variant="ghost" className="flex items-center gap-2">
                {contestant.navigation.next.name}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Video Embed */}
        <div className="aspect-video w-full border-2 border-black">
          <div className="flex h-full items-center justify-center">
            <p className="text-lg font-medium">Video Player Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}
