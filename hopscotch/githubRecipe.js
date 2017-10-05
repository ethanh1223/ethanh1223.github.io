/* Landing Page (for developers)

1) "Welcome to Qordoba! This is where translators will work on globalizing your content. Let's look at how Qordoba will work with your existing Github repo"
2) (On Github Settings) "Your project mgr (or whatever) selected this branch as your protected branch. Anytime you make a PR against this branch, Qordoba will scan fb for rsrc files. Let's look at how we determine what thoe are"
3) File output
4) (On Resource location) "Qordoba scans your project looking for specific file types. For your project, its [x] and [y]"
5) "If only some of your [x] files need to be translated, you have two ways to tell Qordoba where those files are"
6) Whitelist commentary
7) Blacklist commentary
8) (Back to main) "Qordoba only looks for changes in [x] files, so to get started, you'll have to 'touch' any files you want to bring in and create a PR against the protected branch. Qordoba will recognize this and bring the files in"
9) "To get started, plz create a PR against master while touching src etc etc et"

*/



// BEFORE YOU GO ANY FURTHER HERE, LET'S CONFIRM THAT WE CAN DO MULTIPLE MULTIPAGE THINGS IN ONE TOUR

var githubDevFTUE = {
  id: 'github-dev-ftue',
  steps: [
    {
      title: 'Welcome to Qordoba!',
      content: 'This your company\'s project page in Qordoba (also called the Content Root). This is where translators will see content to be translated and submit their work for integration.',
      target: '#firstTarget',
      placement: '',
      multipage: true,
      onNext: () => {
        window.location = //page 2 link
      }
    },
    {
      title: 'Your protected branch',
      content: 'When your colleague (PM? mgr? idk) created this project, they decided to "protect" this branch. Anytime you make a PR against this branch, Qordoba will scan your newly created feature branch for "resource" files, or files that need to be translated. Let\'s look at how we identify those files.',
      target: '',
      placement: '',
    },
    {
      title: 'Translated file output',
      content: 'Here you can see how translated files will be returned to you when Qordoba sends a PR back to your feature branch. Make sure you understand the file naming convention and location of the output directory.',
      target: '',
      placement: '',
      multipage: true,
      onNext: () => {
        window.location = //page 2 link
      }
    },
    {
      title: 'Resource file location',
      content: 'Here you can see how translated files will be returned to you when Qordoba sends a PR back to your feature branch. Make sure you understand the file naming convention and location of the output directory.',
      target: '',
      placement: '',
      multipage: true,
      onNext: () => {
        window.location = //page 2 link
      }
    },
  ]
}

window.addEventListener(('domContentLoaded') => {
  hopscotch.startTour(githubDevFTUE);  
});



//probably need to use GetState() on anything that is not the first page