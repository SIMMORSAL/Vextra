![github-logo](https://user-images.githubusercontent.com/24822099/189476737-3cddd9ef-ade6-4303-9b76-7e676abf08de.png)

# Vextra  
### Elegant and animated portfolio website.

Demo: [vextra.vercel.app](https://vextra.vercel.app)

Vextra is a portfolio template, packed with animations with a 
satisfying flow to page navigation. 

You can customize the website for yourself by going to `/data/` 
directory where you can find all the data files you need to edit 
things. You can also put your images and videos under `/public/` directory.

There's a frontend CMS solution developed for this website, 
named RichContent. It allows you to create beautiful and 
animated pages very fast and nearly anybody can make 
pages with it easily by editing a javascript Object. 
You can also setup your CMS to make things even easier. 
To see some examples of it, please visit the Portfolio tab.

Vextra is written using a combination of NextJS, TypeScript, and Emotion, the latter provided by MaterialUI package.


## Installation

#### Setting up Font Awesome

First you need to get your own access to FontAwesome fonts.

1. Head over to [fontawesome.com/kits](https://fontawesome.com/kits) 
and get your kit which is a link.  
2. Paste that link in `/data/local/_dataGeneral.ts` in front of
`fontAwesomeKitAddress`

#### Setting up Firebase Analytics (Optional)

If you'd like to have Firebase/Google Analytics in your website,
you can set it up by providing your `firebaseConfig` object.

1. Head over to [console.firebase.google.com](https://console.firebase.google.com/)
and create a new project.
    - Make sure Google Analytics is enabled.
2. Create a Web app from inside the project dashboard.
3. Find `firebaseConfig` in Project Settings.
4. Copy it's data and paste it in `/data/local/_dataGeneral.ts` 
in front of `firebaseConfig`

#### Running Locally

You need to have [Node](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) installed on your machine.

In the project directory, run these:
```bash
# install all the required packages listed in package.json
$ yarn install

# run the website in development environment
$ yarn dev
```

After that open [localhost:3000](http://localhost:3000) in your browser.

#### Deploying to Web

The easiest way to get this website running on web is to use Vercel's (creator of NextJS) deployment tool.

1. Push the code to a private GitHub or Gitlab repository.
2. Go to [Vercel.com](https://vercel.com) and create an account, then import the repository.
3. A few minutes later you'll be presented with the links to your website.

If you want to deploy it on your own server, visit [this link](https://nextjs.org/docs/deployment) for more information.


## Landing Page

Landing starts by a big logo image taking all the screen, and then getting smaller while other elements start appearing. After you click on a Tab button and open it, the image will turn into a small logo image and moves to the center of the header. Below is the data it needs for this, however this data is also used in other places.

###### Edit this in:  
`/data/local/_dataGeneral.ts`

```js
interface GeneralDataModel {
  logoBig: string;
  logoSmall: string;
  applyColorToLogo: boolean;
  fontAwesomeKitAddress: string;
  fonts: string;
  defaultFont: string;
  startupImageCacheQueue: string[],
  firebaseConfig?: {};
}
```
`applyColorToLogo` : You can choose to have colors applied to your logo when you navigate the site, which you can disable by setting this to false.  

`fonts` : Website is set up to 
use [Google Fonts](https://fonts.google.com/).

`startupImageCacheQueue` : You can put a list of image links here that should appear as soon as user navigates to a page,
and they will be downloaded and  cached as soon as the website
loads, ready to be displayed quickly.

## About Me

Data in this page consists of two parts. One holds image, name, and two long strings. And the other one is a list of History objects that you can fill with anything that demonstrates your abilities and the things you've done.

###### Edit this in:  
`/data/local/dataAboutMePage.ts`

```js
interface AboutMeData {
  image?: string;
  name?: string;
  textTop?: string;
  textBottom?: string;
}

interface History {
  groupTitle: string;
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

When viewing the website on a large screen, Contact Me will have its own tab, and will be displayed in it. However, on mobile the tab will hide and the content will be displayed in About Me tab.


###### Edit this in:  
`/data/local/dataContactPage.ts`

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

To make new Portfolio items in this tab, you should make a list of 
`Portfolio` Objects.

###### Edit this in:  
`/data/local/dataPortfoliosPage.ts`

```js
interface Portfolio {
  linkId: string;
  name: string;
  isBig?: boolean;
  image: string;
  awardImage?: string;
  awardIsTransparent?: boolean;
  isBackgroundDark?: boolean;
  pageRichContent: RichChunkModel[];
  headerItemsColor?: string;
  backgroundColor?: string;
  textColor?: string;
}
```
`isBig` : By default the first item in `http.../portfolio` page is sized big
and the rest will be placed in a row of two elements.
Setting this value on items that would be small, will cause them to be 
big as well.

`awardImage`: You can give an award image to a portfolio item 
and when you enter the home page, it'll show up after a little 
while, and then will become small and sits in bottom left corner. 
However, Award images are made to work with square images, and 
things may look funky otherwise.  
To fix this, you'll need to open 
`/components/PagePortfolio/PortfolioItem.tsx` and go to line 87. 
There's more information there.
 
`awardIsTransparent`: If your award image has transparent background,
set this to true. Otherwise, a shadow will be cast behind the award.

`isBackgroundDark` : `awardImage` uses this in  `http.../portfolio` page
to decide if the shadow behind it should be white or black.



### Portfolio Pages

There's a special package developed for this website, named RichContent. 
It allows you to create beautiful and animated pages very fast and nearly 
anybody can make pages with it easily by editing a javascript Object.

To make it work, you need to give a list of `RichChunkModel` to the 
`pageRichContent` property. To see some examples of it running, please 
go to [vextra.vercel.app/portfolio](https://vextra.vercel.app/portfolio).

To learn how you can create your own pages, visit 
[https://vextra.vercel.app/portfolio/rich-content-handbook](https://vextra.vercel.app/portfolio/rich-content-handbook). 
It is a page entirely built using Rich Content, and it explains how
you can make your own.

 



## Licence

Weedware. If you want to use this commercially,
you have to buy me a joint.

Bitcoin Address:  
![Bitcoin](https://user-images.githubusercontent.com/24822099/189475474-a5f0e60b-8501-4c64-9d70-d55b05a73fb5.png)  
bc1qar2ukc0llsctga6rcgc58kuek5f89dwxpvc5ud

Ethereum Address:  
![Ethereum](https://user-images.githubusercontent.com/24822099/189475478-38c5c314-10e4-4601-bf18-9d1c0461b658.png)  
0xb43f418bc5355c45331b6838f559d86f7de0410a










