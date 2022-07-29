# Vextra  
### Elegant and animated portfolio site.

Vextra is a portfolio template, packed with animations with a satisfying flow to page navigation. 

You can customize the website for yourself by going to `/data/` directory where you can find all the data and color files.

## Landing Page

Landing starts by a big logo image taking all the screen, and then getting smaller while other elements start appearing. After you click on a map and open it, the image will turn into a small logo image and moves to the center of the header. Below is the data it needs, however the data is also used in other places.

Edit this in:  
`/data/local/_dataGeneral.ts`

```js
interface _GeneralDataModel {
  logoBig: string;
  logoSmall: string;
  applyColorToLogo: boolean;
}
```
`applyColorToLogo` : You can choose to have colors applied to your logo when you navigate the site, which you can disable by setting this to false.

## About Me

Data in this page consists of two parts. One holds image, name, and two long strings. And the other one is a list of History objects that you can fill with anything that demonstrates your abilities and the things you've done.

Edit this in:  
`/data/local/dataAboutMePage.ts`

```js
interface AboutMeData {
  image?: string;
  name?: string;
  textTop?: string;
  textBottom?: string;
}

interface History {
  groupName: string;
  icon: string;
  items: Item[];
}

interface Item {
  title: string;
  date?: string;
  description?: string;
}

```

## Contact Me
```js
interface ContactGroup {
  socialHandle: string;
  links: Links[];
}

interface Links {
  icon: string;
  href: string;
  showInHome?: boolean;
}
```

## Portfolio

```js
interface Portfolio {
  linkId: string;
  name: string;
  isBig?: boolean;
  image: string;
  awardImage?: string;
  isBackgroundDark?: boolean;
  pageRichContent: RichChunkModel[];
  headerItemsColor?: string;
  backgroundColor?: string;
}
```

`awardImage`: You can give an award image to a portfolio item and when you enter the home page, it'll show up after a little while, and then will become small and sits in bottom left corner. However, Award images are made to work with square images, and things may look funky otherwise.  
To fix this, you'll need to open `/components/PagePortfolio&#8291;/PortfolioItem.tsx` and go to line 87. There's more information there.

