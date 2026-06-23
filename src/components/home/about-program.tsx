
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { brand } from '@/lib/brand';

export default function AboutProgram() {
  const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
  const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[450px]">
          {image1 && (
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={image1.imageUrl}
                alt={image1.description}
                fill
                className="object-cover"
                data-ai-hint={image1.imageHint}
              />
            </div>
          )}
          {image2 && (
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-lg overflow-hidden border-4 border-background shadow-2xl">
              <Image
                src={image2.imageUrl}
                alt={image2.description}
                fill
                className="object-cover"
                data-ai-hint={image2.imageHint}
              />
            </div>
          )}
        </div>
        <div>
         
        </div>
      </div>
    </section>
  );
}
