"use client"
import Typography from "@/components/atoms/Typography";
import PageHero from "@/components/organisms/PageHero";
import PageWrapper from "@/components/templates/PageWrapper";
import { client } from "@/lib/sanity/client";
import { cn } from "@/lib/utils";
import { formatPublishedDate } from "@/lib/utils/formatedate";
import { createImageUrlBuilder } from "@sanity/image-url";
import Link from "next/link";
import { useState } from "react";

//TODO:Add metadata

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

const query = `*[_type == "event" ] {
   "slug": slug.current,
      _id,
      title,
      "desc": description,
      "img" : coverImage,
      images,
      dateTime,
      location,
      link,
      body
    }`;

    

const events = await client.fetch(query);
const now = new Date();
  const pastEvents = events.filter(
    (o:any) => new Date(o.dateTime) < now
  );

  const upcomingEvents = events.filter(
    (o:any) => new Date(o.dateTime) >= now
  );
export default function EventListingPage() {

    const [hoveredId, setHoveredId] = useState<string | null>(null);

    if (!events || events.length === 0) {
        return (
            <div className="empty-state">
                <h1>Our Events</h1>
                <p>No Events have been published yet. Check back soon!</p>
            </div>
        );
    }
    return (
        <PageWrapper>
            {/* Upcoming Events */}

            {upcomingEvents.length > 0 ? (<>
            {/* ── Page Header ── */}
            <PageHero
                tag="[ Events ]"
                title="Upcoming Events"
            // TODO: Add Descrepitions
            // description="Every unit ships with factory load certification and a 48-hour SLA."
            />

            {/* Blog Grid */}
            <section className="px-site py-20 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border hover:shadow-md">
                    {upcomingEvents?.map((event: any) => (
                        <Link key={event._id} href={`/event/${event.slug}`} className="no-underline block">
                            <div
                                className="bg-white relative overflow-hidden cursor-pointer h-full "
                                onMouseEnter={() => setHoveredId(event._id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    {event.img && (
                                        <img
                                            src={urlFor(event.img).width(800).url()}
                                            alt={event.title}
                                            className={cn(
                                                "w-full h-full object-cover block brightness-75 transition-transform duration-700",
                                                hoveredId === event._id ? "scale-[1.06]" : "scale-100"
                                            )}
                                        />
                                    )}
                                    <div className={cn(
                                        "absolute inset-0 bg-accent/[0.15] flex items-center justify-center transition-opacity duration-400",
                                        hoveredId === event._id ? "opacity-100" : "opacity-0"
                                    )}>
                                        <span className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-white border border-white/50 px-6 py-2.5">
                                            View Event Details →
                                        </span>
                                    </div>
                                </div>

                                <div className="px-6 pt-7 pb-8">
                                    <div className="flex flex-row justify-between items-center mb-3">
                                        <div>
                                            <p className="font-sans text-xs text-[#E7218B] leading-[1.7]">{event.location}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-fg-faint">{formatPublishedDate(event.dateTime)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Typography variant="heading-product" as="h2">{event.title}</Typography>
                                    </div>
                                    <div>
                                        <Typography variant="para-sm" className="pr-8 mt-2 tracking-normal truncate">{event.plaintextBody} </Typography>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            </>) : <></>}

            {/* Past Events */}
            {pastEvents.length > 0 ? (<>
            
            <PageHero
                tag="[ Events ]"
                title="Past Events"
            // TODO: Add Descrepitions
            // description="Every unit ships with factory load certification and a 48-hour SLA."
            />

            {/* ── Page Header ── */}
            

            {/* Blog Grid */}
            <section className="px-site py-20 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border hover:shadow-md">
                    {pastEvents?.map((event: any) => (
                        <Link key={event._id} href={`/event/${event.slug}`} className="no-underline block">
                            <div
                                className="bg-white relative overflow-hidden cursor-pointer h-full "
                                onMouseEnter={() => setHoveredId(event._id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    {event.img && (
                                        <img
                                            src={urlFor(event.img).width(800).url()}
                                            alt={event.title}
                                            className={cn(
                                                "w-full h-full object-cover block brightness-75 transition-transform duration-700",
                                                hoveredId === event._id ? "scale-[1.06]" : "scale-100"
                                            )}
                                        />
                                    )}
                                    <div className={cn(
                                        "absolute inset-0 bg-accent/[0.15] flex items-center justify-center transition-opacity duration-400",
                                        hoveredId === event._id ? "opacity-100" : "opacity-0"
                                    )}>
                                        <span className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-white border border-white/50 px-6 py-2.5">
                                            View Event Details →
                                        </span>
                                    </div>
                                </div>

                                <div className="px-6 pt-7 pb-8">
                                    <div className="flex flex-row justify-between items-center mb-3">
                                        <div>
                                            <p className="font-sans text-xs text-[#E7218B] leading-[1.7]">{event.location}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-fg-faint">{formatPublishedDate(event.dateTime)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Typography variant="heading-product" as="h2">{event.title}</Typography>
                                    </div>
                                    <div>
                                        <Typography variant="para-sm" className="pr-8 mt-2 tracking-normal truncate">{event.plaintextBody} </Typography>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            </>) : <></>}
        </PageWrapper>
    );
};