// This is a PURE JAVASCRIPT FILE
import Vue from 'vue'
import VueRouter from 'vue-router'

// step 1 - import (you can use .vue or NOT, it doesn't matter Javascript is smart)
import MenuPage from '@/views/MenuPage'
import ContactPage from '@/views/ContactPage'
import ReservationsPage from '@/views/ReservationsPage'

Vue.use(VueRouter)

const routes = [
  // register the route by adding to Routes Array
  // minimum to specify is the Path (what does user have to type into browser in order to show this)
  {
    // "/" = root
    path : "/",
    // 2nd specify component:
    component: MenuPage,
    // meta is an array of objects, they don't automatically display/activate once they're here
    // we need to still extract it and use it when we are navigating pages
    meta: [
      {
        title: `Our Menu`
      },
      {
        name: "description",
        content: "Enjoy our Italian style pizza selection!"
      },
      {
        name: "author",
        content: "Siobhan Bonardi"
      }
    ]
  },
  {
    path: "/contact-us",
    component: ContactPage,
    meta: [
      {
        title: `Contact Us`
      },
      {
        name: "description",
        content: "Give us a call 24/7!"
      },
      {
        name: "author",
        content: "Siobhan Bonardi"
      }
    ]
  },
  {
    path: "/reservations",
    component: ReservationsPage,
    meta: [
      {
        title: `Make a Reservation`
      },
      {
        name: "description",
        content: "Call for reservations!"
      },
      {
        name: "author",
        content: "Siobhan Bonardi"
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// learning to use meta 
// this is the way the course teaches it, if you find another solution that works for you then go ahead and use it!
// meta tags are a MUST for your webpage
router.beforeEach((to,from,next)=>{
  // Get all meta tags 
  let metaTags = document.querySelectorAll('meta');
  // Loop through the tags and remove each
  // for OF is vanilla Javascript so that's what we have to use (vue is for in loops) and this page is PURE JAVASCRIPT
  for (let tag of metaTags){
    tag.remove();
  }
  // to.meta (navigating TO.meta.title)
  let newTags = to.meta;
  document.querySelector('title').innerText = newTags[0].title;

  // i zero is the title obj that we don't need here
  for (let i = 1; i<newTags.length; i++){
    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
                                                      `<meta name:"${newTags[i].name}" description="${newTags[i].content}">`);
  }
  // if you want to save with unused variables you can just write them like below and it won't throw errors

  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
                                                    `<meta charset="utf-8">
                                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                                    <meta name="viewport" content="width=device-width,initial-scale=1.0">`
                                                    );
  next();

  // to;
  from;
  // next();
})

// if you want to use meta on a single page, you could call the last functions in the Mounted
// define the title through javascript whenever the page loads

export default router
