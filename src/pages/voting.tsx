import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Progress } from "../components/ui/progress"
import { Heart, Search } from "lucide-react"

export default function Voting() {
  const contestants = [
    { name: "Kellyrae", votes: 45, image: "/placeholder.svg" },
    { name: "Anita", votes: 30, image: "/placeholder.svg" },
    { name: "Ben", votes: 25, image: "/placeholder.svg" },
    { name: "Chizoba", votes: 20, image: "/placeholder.svg" },
    { name: "Fairme David", votes: 15, image: "/placeholder.svg" },
    { name: "Handi", votes: 10, image: "/placeholder.svg" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">
          Vote for Your Favorite Contestant
        </h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
            <Input
              className="w-full rounded-full border-2 border-black pl-10"
              placeholder="Search contestants..."
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contestants.map((contestant, index) => (
            <div key={index} className="rounded-lg border-2 border-black p-4">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg border-2 border-black">
                <div
                  // src={contestant.image}
                  // alt={contestant.name}
                  // width={300}
                  // height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mb-2 text-xl font-bold">{contestant.name}</h2>
              <Progress
                value={contestant.votes}
                max={50}
                className="mb-4 h-2 w-full bg-gray-200"
              />
              <div className="mb-4 flex items-center justify-between">
                <span>{contestant.votes} votes</span>
                <span>{((contestant.votes / 50) * 100).toFixed(1)}%</span>
              </div>
              <Button className="w-full border-2 border-black bg-white text-black hover:bg-gray-100">
                Vote <Heart className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
