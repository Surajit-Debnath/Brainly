import { ShareIcon } from "../../icons/ShareIcon";
interface CardProps{
  title:string
  link:string,
  type:"twitter"|"youtube"
}
interface VideoProps {
  type: "youtube";
  link: string;
}

function Video({ type, link }: VideoProps) {
  if (type === "youtube") {
    const videoId = new URL(link).searchParams.get("v");

    if (!videoId) return <p>Invalid YouTube link</p>;

    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return null;
}
export function Card({title,link,type}:CardProps) {
  return (
    <div className="bg-white rounded-md border-gray-200 border max-w-96 p-8">
       <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-gray-500">
               <ShareIcon size="md"/>
            </div>
            <div className="text-lg font-medium">
               {title}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
                <a href={link} target="_blank">
                  <ShareIcon size="md"/>
                </a>
            </div>
            <div>
                <ShareIcon size="md"/>
            </div>
          </div>
       </div>
       <div className="pt-4">
         {type === "youtube" && <Video type={type} link={link} />}

        {type==="twitter" &&   <blockquote className="twitter-tweet"> <a href={link}></a></blockquote>}
       </div>
       
    </div>
  );
}