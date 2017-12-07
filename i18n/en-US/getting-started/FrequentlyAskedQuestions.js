export default {
  header: 'Frequently asked questions',
  headerText: 'Stuck on a particular problem? Check some of these common gotchas before creating a ticket. If you still cannot find what you are looking for, submit an <a href="https://issues.vuetifyjs.com" target="_blank" rel="noopener">issue</a> on github or ask the community in <a href="https://chat.vuetifyjs.com" target="_blank" rel="noopener">discord</a>.',
  question: 'Question:',
  answer: 'Answer',
  noResultsFound: 'No results found',
  resetSearch: 'Reset search',
  gotchas: [
    {
      q: `My code doesn't work - what should I do?`,
      a: `
            <p>First, ensure that you're using the latest version of Vue.js and Vuetify. Try to reproduce it in codepen using the following template:</p>
            <a href="https://template.vuetifyjs.com/" target="_blank" rel="noopener">https://template.vuetifyjs.com</a>.
            <p>and then seek advice in the official discord server:</p>
            <a href="https://chat.vuetifyjs.com/" target="_blank" rel="noopener">https://chat.vuetifyjs.com</a>
          `
    },
    {
      q: `Is there a codepen template with router?`,
      a: 'Yes, <a href="https://codepen.io/wernerm/pen/LjggoV" target="_blank" rel="noopener">https://codepen.io/wernerm/pen/LjggoV</a>'
    },
    {
      q: `My application does not look correct`,
      a: `Vuetify requires the use of the <code>v-app</code> component. It should wrap your entire application and is the center point for much of the framework functionality. If for whatever reason you cannot use this element, you can mimic it from attributes and classes. Set the <code>data-app</code> attribute to true on the highest element available (not including body), and the **application application--{light|dark}** classes.`
    },
    {
      q: `The Dark or Light theme are not working.`,
      a: `Vuetify requires a mounting point in order to perform tasks such as theme styling. Ensure that you have a <code>v-app</code> wrapping your application. In the event that this is not possible, for whatever reason, you can mimic its behavior by applying **data-app** and **class="application application--light (or dark)** to the highest element that you can within your application.`
    },
    {
      q: `Menu/Dialog/Navigation drawer are not opening properly.`,
      a: `Ensure that your components are wrapped with a <code>v-app</code> element. If you are using an element to activate the component that is not placed into the <kbd>activator</kbd> slot, ensure that you stop propagation of the click event. These components utilize the <code>v-outside-click</code> directive and will immediately close.`
    },
    {
      q: `The scrollbar is showing even though my content is not overflowing vertically.`,
      a: `Vuetify by default turns on the html scrollbar. This is a design choice and has been debated numerous times. There are pros and cons to having and not having it and as of now, the vote is in favor of leaving it as is. If you wish to disable this functionality, simply add <code>html { overflow-y: auto }</code> to your style file.`
    },
    {
      q: `How to center vertically?`,
      a: `Apply the **fill-height** prop to <code>v-container</code>. This helper class normally only adds **height: 100%**, but for the container, it also looks for a child <code>v-layout</code> and applies the needed classes to vertically center the content.`
    },
    {
      q: `My "/" link is active when I'm on "/home" page`,
      a: 'Add the **exact** to the link that points to absolute /. For more information on this, you can visit the official Vue router <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank" rel="noopener">documentation</a>.'
    },
    {
      q: `My page on mobile is not responsive`,
      a: 'Add the <code>`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">`</code> to the <code>`<head>`</code> section in your index.html.'
    },
    {
      q: `How do I use Font Awesome Icons or Material Design Icons (mdi)?`,
      a: `
            <p>You must add the fonts to your index.html or otherwise import them into your project.</p>
            <ul><li>MDI: <a href="https://materialdesignicons.com/getting-started" target="_blank" rel="noopener">https://materialdesignicons.com/getting-started</a></li><li> FA: <a href="http://fontawesome.io/get-started/" target="blank" rel="noopener">http://fontawesome.io/get-started/</a></li></ul>
          `
    },
    {
      q: `My dialog closes immediately after clicking the button`,
      a: `When not using the **activator** slot for <code>v-menu</code> and <code>v-dialog</code> for example, you must manually stop the _propagation_ of the click event. To do this, simply add the _.stop_ modifier to the click event, <code>@click.stop="myMethod"</code>.`
    },
    {
      q: `Relative images are not working in <code>v-card</code> components`,
      a: `<p>Vue loader converts relative paths into require functions automatically for you. Unfortunately, this is not the case when it comes to custom components.</p><p>In order to use relative paths, you must use the <code>require</code>:</p><p><code class="pa-2">methods: {<br>&nbsp;&nbsp;getImgUrl (img) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return require('../../assets/img/' + img)<br>&nbsp;&nbsp;}<br>}</code></p><p>and use it in the tempate: <code>:src="getImgUrl('card.png')"</code></p>`
    }
  ],
  questionHeader: 'Have something that you think belongs here?',
  questionButton: 'Let us know'
}
