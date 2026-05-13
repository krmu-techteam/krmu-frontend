

interface HeroInterface {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string
}

class HeroParent{
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
    constructor(title: string, description: string, image: string, buttonText: string, buttonLink: string){
        this.title = title;
        this.description = description;
        this.image = image;
        this.buttonText = buttonText;
        this.buttonLink = buttonLink;
    
    }
}

class HeroDefault extends HeroParent implements HeroInterface{
    constructor(title: string, description: string, image: string, buttonText: string, buttonLink: string){
        super(title, description, image, buttonText, buttonLink);
    }
}