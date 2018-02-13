# TODO

## Whats Occurring....

About time I raised this baby from the ashes...

you are not neglected, you have just been waiting for things to be right. So where have we been, well, experimenting. We have built several frameworks, had many jobs, built families...

I look back and well times have changed, so lets get started.

V4, this will be similar in look and feel, well as close as it can be, but the whole backend is going to be gutted, replaced with a modern MVC approach using my own tried and tested tailored MVC structure using SLIM. From there the UI will move from angular which is a buggy, train wreck of a freighter. trust me, I have used it in anger in many iterations. I have come to loath UI frameworks, due to them coming and going like the seasons. The only true way to protect from this, make your own, and mine is very very modular!

We will be swapping to my UI tools, be rebranding the system and moving to the hallowed MVC structured I love so much, with an eye on what if, what if we could do this without PHP, as my spidey sense is starting to see the end of a much loved language, node is superior and together with servless tech a true replacement.

So for now, we are going to get the sleeves rolled up, see what we can come up with and innovate once again people, oh and if you dont know docker, go read, all future release will be configured for docker release with automated builds, we will not be wasting time supporting other architectures, it's too much of a headache, go docker or go home.

## API

The backend rars API which was again very old work and a dip into the world of API backends (over ten years ago!), well what can I say, we have come along way now. This will swap to a slim API for API access and passthrough for serving the static UI so we dont need to use cors (which we have a middleware for anyway if we need to) Authentication will be pretty much basic as it currently is, but a move to json web token will happen.

Once we have this working, we may well be switching to a full blown JS setup using a node MVC to replace slim, we need to see about this and do more work on this as a viable replacement for slim. Its less overhead, quicker, can run on serverless tech and its pretty close to slim in fit and function raziloMVC this is proof of concept at the mo, nothing more so a slim backend will serve for some time yet and allow for time to look into a node extension solution.

## UI

This needs some work, lots of little anouying things I have noticed now I have not used the system in a while, such as not knowing your logged in until you hover over the icon, also cant use anythign under where the panel comes out such as a link when logged in.

This is going to be overhauled, angular 1.X is old and buggy as hell, angular 2 is a train wreck, vue is best of the lot but I think my UI framework is ready after a year of use in other projects. Going to switch the UI over to a single page app built from native web components (through Razilo Component) and use the binding tool Razilo Bind.

We will try and keep the look and feel, some slight changes but we need to replace this aging UI with a modulare custom web component one.

## DB

This is still good, the changes made to sqlite where the correct ones, BUT the PDO wrapper was my very early work, suffers from a concurrency bug by design and is to be replaced. All DB access will be through models via NORM my own model abstraction wrapper for PDO which adds chaining, save(), customer model functions and object responses (still needs work but is perfect for this)... it is models without the overhead of build scripts or crappiness of a bad model config crapping out your system (it will still return correct data even if not specifiying it in the model as it works with native PDO object return)

# NOTES

* move slim into the house, do it slowly, shhhhh, nothing to see here...
* resolve the public src isolation
* pass through any static routes to public assets
* move over rars api points to controllers
* pull out logic to services
* move DB stuff to models, bring in NORM (Not an ORM)
* check out possibilities of extensions being used as is, or with minimal work to port and this time I have my sights set on a marketplace.
