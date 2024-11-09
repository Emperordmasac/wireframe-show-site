import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Watch,
  Share2,
  Video
} from "lucide-react"

export default function LandingPage() {
  const seasons = [9, 8, 7, 6, 5, 4]
  const contestants = [
    { name: "Kellyrae", status: "WINNER" },
    { name: "Anita", status: "OUT" },
    { name: "Ben", status: "OUT" },
    { name: "Chizoba", status: "OUT" },
    { name: "Fairme David", status: "OUT" },
    { name: "Handi", status: "OUT" },
    { name: "Kassia", status: "OUT" },
    { name: "Michky", status: "OUT" }
  ]
  const contentItems = [
    {
      type: "video",
      title: "How 28 became one: The season that was – BBNaija",
      excerpt:
        "The No Loose Guard season started with 14 pairs who were once strangers, to one winner..."
    },
    {
      type: "video",
      title:
        "Finale: No Loose Guard steamiest kisses and secret romances exposed! – BBNaija",
      excerpt:
        "Love was in the air in Big Brother Naija Season 9: No Loose Guard! We've compiled the HOTTEST..."
    },
    {
      type: "video",
      title: "Finale: The season's gbas gbos – BBNaija",
      excerpt:
        "Contrary to popular belief, the No Loose Guard crew wasn't always about love and light! From ship..."
    },
    {
      type: "news",
      title:
        "No Loose Guard season: A BBNaija journey of love, drama, and twists",
      excerpt:
        "BBNaija season 9 gave us everything we didn't know we needed; drama, romance, fights, thrilling challenges..."
    },
    {
      type: "news",
      title: "Ebuka's iconic fashion moments on BBNaija season 9",
      excerpt:
        "This season of BBNaija brought all the drama, spice, and excitement, but one thing that never..."
    },
    {
      type: "video",
      title: "Finale: Nelly talks about being the last pair standing – BBNaija",
      excerpt:
        "In Anita and Nelly's exit interview with Ebuka, they share their thoughts on Anita's strictness, the pressure o..."
    },
    {
      type: "video",
      title: "Finale: Ozee and Sooj open up on bromance – BBNaija",
      excerpt:
        "In their exclusive chat with Ebuka, Ozee and Sooj open up on how they naturally gravitated towards each..."
    },
    {
      type: "video",
      title:
        "Finale: Victoria reflects on her relationships in the house – BBNaija",
      excerpt:
        "Victoria shares her experience dealing with emotional challenges in the BBNaija No Loose Guard Hous..."
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        {/* Top Navigation */}
        <div className="mb-8 flex justify-between">
          <div className="h-12 w-36 border-2 border-black"></div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
            <Input
              className="w-64 rounded-full border-2 border-black pl-10"
              placeholder="Type to search..."
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold md:text-7xl">
              The Money is Married!
            </h1>
            <Button
              variant="outline"
              className="rounded-full border-2 border-black px-8 text-lg font-semibold"
            >
              See how he won
            </Button>

            {/* Season Selector */}
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold">Season</span>
                <div className="flex gap-2">
                  {seasons.map((season) => (
                    <Button
                      key={season}
                      variant={season === 9 ? "default" : "outline"}
                      className={`h-10 w-10 rounded-lg border-2 ${
                        season === 9
                          ? "border-black bg-black text-white"
                          : "border-black"
                      }`}
                    >
                      {season}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video w-full border-2 border-black"></div>
            <div className="absolute bottom-4 right-4 text-right">
              <div className="text-6xl font-bold"></div>
              <div className="text-4xl font-bold"></div>
            </div>
          </div>
        </div>

        {/* Social Bar */}
        <div className="mb-12 grid grid-cols-2 gap-2 md:grid-cols-5">
          {[
            { icon: Twitter, label: "Join the conversation" },
            { icon: Facebook, label: "Join the community" },
            { icon: Instagram, label: "Double tap" },
            { icon: Watch, label: "Challenge time" },
            { icon: Share2, label: "Watch and share" }
          ].map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center justify-center gap-2 border-2 border-black"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 border-black"
            >
              <div className="relative aspect-video">
                <div className="absolute inset-0 border-b-2 border-black bg-white"></div>
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded border-2 border-black px-2 py-1 text-xs">
                  {item.type === "video" ? (
                    <>
                      <Video className="h-3 w-3" />
                      Video
                    </>
                  ) : (
                    <span>News</span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contestants Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-4xl font-bold">Meet the Housemates</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contestants.map((contestant, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border-2 border-black bg-white p-4"
              >
                <div className="relative mb-4 aspect-[3/4] w-full">
                  <div className="absolute inset-0 border-2 border-black bg-white"></div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{contestant.name}</h3>
                  <span
                    className={`rounded px-2 py-1 text-xs font-bold ${
                      contestant.status === "WINNER"
                        ? "border-2 border-black bg-black text-white"
                        : "border-2 border-black"
                    }`}
                  >
                    {contestant.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
