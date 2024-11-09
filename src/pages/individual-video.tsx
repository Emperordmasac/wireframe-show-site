import { Button } from "../components/ui/button"
import { Play, Video as VideoIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface VideoPageProps {
  video?: {
    title: string
    date: string
    description: string
    videoId: string
    upNext: Array<{
      id: string
      title: string
      date: string
      thumbnail: string
    }>
  }
}

export default function IndividualVideoPage({
  video = {
    title:
      "Finale: No Loose Guard steamiest kisses and secret romances exposed! – BBNaija",
    date: "14 October",
    description:
      "Love was in the air in Big Brother Naija Season 9: No Loose Guard! We've compiled the HOTTEST moments of romance and passion from this season's housemates. From sneaky cuddles and stolen kisses to full-blown 'ships' setting sail, this video has it ALL! Did your favorite couple make the cut? Watch now and find out!",
    videoId: "example",
    upNext: [
      {
        id: "1",
        title: "Finale: Nelly, Onyeka, and Victoria sign out – BBNaija",
        date: "04 October",
        thumbnail: "/placeholder.svg"
      },
      {
        id: "2",
        title: "Finale: Kellyrae wins No Loose Guard season! – BBNaija",
        date: "04 October",
        thumbnail: "/placeholder.svg"
      },
      {
        id: "3",
        title: "Finale: Anita, Ozee and Sooj out of the game! – BBNaija",
        date: "04 October",
        thumbnail: "/placeholder.svg"
      },
      {
        id: "4",
        title: "Day 70: No Loose Guard finale is here! – BBNaija",
        date: "04 October",
        thumbnail: "/placeholder.svg"
      },
      {
        id: "5",
        title: "Live show 11 – 6 Oct: Wanni's No Loose Guard Journey",
        date: "04 October",
        thumbnail: "/placeholder.svg"
      }
    ]
  }
}: VideoPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="mb-4 text-3xl font-bold">{video.title}</h1>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <VideoIcon className="h-4 w-4" />
                  Video
                </span>
                <span className="text-sm">{video.date}</span>
              </div>
              <p className="mb-6 text-lg">{video.description}</p>
              <Button className="border-2 border-black bg-black text-white hover:bg-black/90">
                Subscribe to Watch
              </Button>
            </div>

            {/* Video Player Placeholder */}
            <div className="aspect-video w-full border-2 border-black">
              <div className="flex h-full items-center justify-center">
                <Play className="h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Up Next Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Up Next</h2>
            <div className="space-y-4">
              {video.upNext.map((nextVideo) => (
                <Link
                  key={nextVideo.id}
                  to={`/`}
                  className="flex gap-4 hover:bg-gray-50"
                >
                  <div className="relative aspect-video w-40 flex-shrink-0 border-2 border-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{nextVideo.title}</h3>
                    <p className="text-sm">{nextVideo.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
