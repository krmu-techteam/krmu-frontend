import Image from "next/image"



const BiggestBrand = () => {
  return (
    <section className="py-10 overflow-hidden">
        <div className="max-w-[1664px] mx-auto w-full text-center instrument-serif px-4">
            <h4 className="sm:text-3xl">Our students now build stories for</h4>
            <h3 className="text-4xl sm:text-5xl md:text-7xl">India’s biggest brands</h3>
        </div>
        <div className="my-5 py-10 sm:py-20 bg-[#f2f2f2] bg-[url(/semce/grid.svg)] bg-cover bg-no-repeat bg-center px-4">
            <div className="flex gap-10 marquee overflow-hidden">
                <div><Image src="/wp-content/semce/logos/viral-pitch.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/media-mantra.jpg" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/studyiq.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/indigo.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/ministry-of-jal-shakti.svg" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/ministry-of-civil-aviation.svg" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/air.webp" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/ist.webp" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/iah.jpg" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/dainiki-bhaskar.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/asian-news.svg" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/wion.avif" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/zee-media.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/news24.jpg" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/ht.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/snitch-logo.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
                <div><Image src="/wp-content/semce/logos/bookmyshow.png" width={168} height={86} className="w-full h-20 object-contain" alt="Biggest Brands" /></div>
            
            </div>
        </div>
    </section>
  )
}

export default BiggestBrand