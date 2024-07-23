import{s as R,B as ce,n as T,r as ye,o as Me,C as He,f as oe}from"../chunks/scheduler.BrzJ5ckG.js";import{S as N,i as W,e as d,s as _,m as Ie,c as h,d as q,y as I,h as k,g as v,o as c,p as J,j as D,k as o,E as Z,u as me,v as fe,w as ve,t as re,a as le,x as ge,z as qe,b as je,f as Pe}from"../chunks/index.Bcdbw2sY.js";import{N as De,e as ue,X as Ee}from"../chunks/x.B6SRoOiU.js";const Se=""+new URL("../assets/admin_view.BjGotkbQ.png",import.meta.url).href,Le=""+new URL("../assets/searchable_flights_ui.c8WhSKRS.png",import.meta.url).href;function ze(n){let e,i,t="×",s,u,y,m,f;return{c(){e=d("div"),i=d("span"),i.textContent=t,s=_(),u=d("img"),this.h()},l(r){e=h(r,"DIV",{class:!0});var p=q(e);i=h(p,"SPAN",{class:!0,"data-svelte-h":!0}),I(i)!=="svelte-1alr3y1"&&(i.textContent=t),s=k(p),u=h(p,"IMG",{class:!0,src:!0,style:!0}),p.forEach(v),this.h()},h(){c(i,"class","close svelte-wdgch6"),c(u,"class","modal-content svelte-wdgch6"),ce(u.src,y=n[1])||c(u,"src",y),c(u,"style",n[2]),c(e,"class","modal svelte-wdgch6")},m(r,p){D(r,e,p),o(e,i),o(e,s),o(e,u),m||(f=[Z(i,"click",n[4]),Z(e,"click",n[4])],m=!0)},p(r,p){p&2&&!ce(u.src,y=r[1])&&c(u,"src",y),p&4&&c(u,"style",r[2])},d(r){r&&v(e),m=!1,ye(f)}}}function Oe(n){let e,i,t="<h1>Airport Management System</h1>",s,u,y=`<h2>Overview</h2> <p>With a friend, we built out a database system for the model problem of
      managing an airport. This involved first formally designing an appropriate
      data model, planning out what tables and permissions should be involved,
      generating realistic data for demonstrations, implementing the database
      and all the query logic, and finally wrapping it in a clean UI.</p>`,m,f,r,p="Views",S,A,z,L,C,$,E,V="Admin View",U,F,Q=`<p>The project has three different views that can be logged into:
        administration, crew members, and passengers. Each view has a complete
        user interface for viewing the allowed information, such as upcoming
        flights as well as modifying the allowed information.</p> <p>For example, a passenger can see info about their own upcoming flights,
        as well as all flights that will be going into and out of the airports.
        They can then book flights, cancel flights, swap flights, or modify
        information about a flight such as the number of bags or their seat (if
        other seats are available). On the other hand a crew member can view
        their own schedules including information about what other crew are on
        the flights they are working, as well as what seats are full on those
        flights.</p> <p>All of the permissions are handled through SQL views to ensure no
        unintended data is available.</p>`,B,a,b,x=`<h2>Utility</h2> <p>Each view is fully functioning with the expected utility. The data
          model stores airlines, planes, terminals, destinations, flights, crew
          members, passengers, bags, and booking info. New users, passengers,
          and flights can be dynamically created and edited via the admin UI.
          Passengers may create and modify bookings, as well as their baggage
          info.</p> <p>To aid in usability, dynamic searching is done via dropdown menus that
          create dynamic SQL queries. This makes finding specific information
          like flights on a specific day simple. Furthermore, searches can be
          downloaded into an easily readable text format for logging and further
          analysis.</p>`,l,w,g,M,K,ee,O,we="Flight Search UI",de,X,be=`<h2>How It Was Made</h2> <p>To build the final project, we used PostgreSQL via mariadb to handle all
        of the data. For the UI, we used PySide6 with components to implement a
        simple and easy to navigate design.</p>`,he,Y,xe='<p>For more information, visit the project on <a href="https://github.com/bizy-coder/OptimalBoggleBoard" target="_blank">GitHub</a>.</p>',ie,te,pe,Te,H=n[0]&&ze(n);return{c(){e=d("div"),i=d("div"),i.innerHTML=t,s=_(),u=d("div"),u.innerHTML=y,m=_(),f=d("div"),r=d("h2"),r.textContent=p,S=_(),A=d("div"),z=d("figure"),L=d("img"),$=_(),E=d("figcaption"),E.textContent=V,U=_(),F=d("div"),F.innerHTML=Q,B=_(),a=d("div"),b=d("div"),b.innerHTML=x,l=_(),w=d("div"),g=d("figure"),M=d("img"),ee=_(),O=d("figcaption"),O.textContent=we,de=_(),X=d("div"),X.innerHTML=be,he=_(),Y=d("div"),Y.innerHTML=xe,ie=_(),H&&H.c(),te=Ie(),this.h()},l(j){e=h(j,"DIV",{class:!0});var P=q(e);i=h(P,"DIV",{class:!0,"data-svelte-h":!0}),I(i)!=="svelte-vrqd10"&&(i.innerHTML=t),s=k(P),u=h(P,"DIV",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-12fuuh1"&&(u.innerHTML=y),m=k(P),f=h(P,"DIV",{class:!0});var G=q(f);r=h(G,"H2",{"data-svelte-h":!0}),I(r)!=="svelte-58tk9g"&&(r.textContent=p),S=k(G),A=h(G,"DIV",{class:!0});var _e=q(A);z=h(_e,"FIGURE",{style:!0});var ae=q(z);L=h(ae,"IMG",{src:!0,alt:!0,style:!0}),$=k(ae),E=h(ae,"FIGCAPTION",{"data-svelte-h":!0}),I(E)!=="svelte-6zp5p6"&&(E.textContent=V),ae.forEach(v),_e.forEach(v),U=k(G),F=h(G,"DIV",{class:!0,"data-svelte-h":!0}),I(F)!=="svelte-172hm2v"&&(F.innerHTML=Q),B=k(G),a=h(G,"DIV",{class:!0});var se=q(a);b=h(se,"DIV",{class:!0,"data-svelte-h":!0}),I(b)!=="svelte-1i6ai2t"&&(b.innerHTML=x),l=k(se),w=h(se,"DIV",{class:!0});var ke=q(w);g=h(ke,"FIGURE",{});var ne=q(g);M=h(ne,"IMG",{src:!0,alt:!0,style:!0}),ee=k(ne),O=h(ne,"FIGCAPTION",{"data-svelte-h":!0}),I(O)!=="svelte-1lojmk2"&&(O.textContent=we),ne.forEach(v),ke.forEach(v),se.forEach(v),de=k(G),X=h(G,"DIV",{class:!0,"data-svelte-h":!0}),I(X)!=="svelte-i46et4"&&(X.innerHTML=be),G.forEach(v),he=k(P),Y=h(P,"DIV",{class:!0,"data-svelte-h":!0}),I(Y)!=="svelte-js75jx"&&(Y.innerHTML=xe),P.forEach(v),ie=k(j),H&&H.l(j),te=Ie(),this.h()},h(){c(i,"class","header"),c(u,"class","overview"),ce(L.src,C=Se)||c(L,"src",C),c(L,"alt","Admin View"),J(L,"width","102%"),J(L,"max-width","102%"),J(L,"cursor","pointer"),J(z,"margin-bottom","1rem"),c(A,"class","image"),c(F,"class","text"),c(b,"class","text"),ce(M.src,K=Le)||c(M,"src",K),c(M,"alt","Flight Search UI"),J(M,"width","105%"),J(M,"max-width","105%"),J(M,"cursor","pointer"),c(w,"class","image"),c(a,"class","section"),c(X,"class","text"),c(f,"class","content"),c(Y,"class","footer"),c(e,"class","container")},m(j,P){D(j,e,P),o(e,i),o(e,s),o(e,u),o(e,m),o(e,f),o(f,r),o(f,S),o(f,A),o(A,z),o(z,L),o(z,$),o(z,E),o(f,U),o(f,F),o(f,B),o(f,a),o(a,b),o(a,l),o(a,w),o(w,g),o(g,M),o(g,ee),o(g,O),o(f,de),o(f,X),o(e,he),o(e,Y),D(j,ie,P),H&&H.m(j,P),D(j,te,P),pe||(Te=[Z(L,"click",n[5]),Z(M,"click",n[6])],pe=!0)},p(j,[P]){j[0]?H?H.p(j,P):(H=ze(j),H.c(),H.m(te.parentNode,te)):H&&(H.d(1),H=null)},i:T,o:T,d(j){j&&(v(e),v(ie),v(te)),H&&H.d(j),pe=!1,ye(Te)}}}function Fe(n,e,i){let t=!1,s="",u="";function y(p){i(1,s=p),i(0,t=!0);const S=window.scrollY+window.innerHeight-800;i(2,u=`top: ${S}px; left: 5%`)}function m(){i(0,t=!1)}return[t,s,u,y,m,()=>y(Se),()=>y(Le)]}class Ve extends N{constructor(e){super(),W(this,e,Fe,Oe,R,{})}}const Be=""+new URL("../assets/file4.DTjlobwR.png",import.meta.url).href;function Ue(n){let e,i=`<div class="header"><h1>Adversarial NLP</h1></div> <div class="overview"><h2>Overview</h2> <p>We investigated a <a href="https://arxiv.org/abs/2204.04636" target="_blank" rel="noopener noreferrer">state-of-the-art defense</a> against adversarial examples in NLP classifiers. Our research revealed an
      easy method to defeat the defense mechanism and demonstrated a general problem
      with NLP defenses, and concluded by working towards better generalized methods
      for evaluation.</p></div> <div class="content"><div class="text"><h2>Background</h2> <p>While AI offers many potential benefits, one risk is our incomplete
        understanding of how it works. This has led to the discovery that small
        modifications to inputs can &quot;trick&quot; classifiers. Initially studied with
        images, this issue has extended to text classification and response
        systems used for tasks like spam classification and sentiment analysis.</p> <p>For text classification, these &quot;attacks&quot; work in a broad sense by
        changing words in an input until they find a change that seems to
        confuse the model. They then repeat this until the model is sufficiently
        confused it makes the wrong prediction. Some examples of this can be
        found near the bottom of this page.</p></div> <div class="section svelte-1qutzp7" style="margin:0; padding:0"></div> <div class="section svelte-1qutzp7"><div class="text"><h2>Defense Mechanism Analysis</h2> <p>The published defense, aimed to determine whether an example was real
          or adversarial (tricking the model), by analyzing the distribution of
          the logits of the classifier. Upon further investigation, our research
          demonstrated that in practice this mostly functioned as a binary
          classifier based on model confidence (gaining less than 5% performance
          over this).</p> <p>As a result, the image on the left shows that the distribution of
          confidence in adversarial predictions vs clean predictions is nearly
          exactly dependent on confidence level.</p></div> <div class="image svelte-1qutzp7"><figure><img src="${Be}" alt="Confidence Scores for Clean and Adversarial Examples" class="svelte-1qutzp7"/> <figcaption>Confidence scores distribution for clean and adversarial examples</figcaption></figure></div></div> <div class="section svelte-1qutzp7"><div class="text"><h2>Defeating the Defense</h2> <p>Using our understanding, we demonstrated how to trick the defense
          99.4% of the time without altering how a human would interpret the
          sentence, simply by swapping words. Our methods could trick the
          defense into misclassifying both real and adversarial examples.</p></div> <div class="image svelte-1qutzp7"><div class="table-container svelte-1qutzp7"><table class="adversarial-detection-table svelte-1qutzp7"><caption class="svelte-1qutzp7">Adversarial Defense Confidence Dependence</caption> <thead><tr><th class="svelte-1qutzp7">Attack Confidence Threshold</th> <th class="svelte-1qutzp7">Defense Success Rate (%)</th></tr></thead> <tbody><tr><td class="svelte-1qutzp7">0.5</td> <td class="svelte-1qutzp7">93.0</td></tr> <tr><td class="svelte-1qutzp7">0.8</td> <td class="svelte-1qutzp7">73.6</td></tr> <tr><td class="svelte-1qutzp7">0.97</td> <td class="svelte-1qutzp7">0.05</td></tr> <tr><td class="svelte-1qutzp7">0.997</td> <td class="svelte-1qutzp7">0.00</td></tr></tbody></table></div></div></div> <h2>Example of NLP attacks + Defense</h2> <p>These examples demonstrate how the attack and defense work. Given an
      initial sample, words are changed to effect the model prediction. Here, we
      take the same sentence and change it in different ways. For each scenario
      we report the sentiment classification of the original model, as well as
      the prediction of the defense about whether the example was real or an
      adversarial example (AE).</p> <p>When the original model has a low confidence, the defense will assume it
      is an adversarial example, and when the confidence is high, it will assume
      it is valid. This is regardless of whether or not it was actually made
      adversarial</p> <div class="image svelte-1qutzp7"><div class="table-container svelte-1qutzp7"><table class="adversarial-detection-table svelte-1qutzp7"><caption class="svelte-1qutzp7">Adversarial Defense Confidence Dependence</caption> <thead><tr><th class="svelte-1qutzp7">Example Type</th> <th class="svelte-1qutzp7">Example Text</th> <th class="svelte-1qutzp7">Model Prediction</th> <th class="svelte-1qutzp7">Model Confidence</th> <th class="svelte-1qutzp7">Defense Prediction</th></tr></thead> <tbody><tr><td class="svelte-1qutzp7">Original Example </td><td class="svelte-1qutzp7">I went there today! The cut was <b>[[terrible]]</b>! I have an
                awful experience. They lady that cut my hair was <b>[[nice]]</b>
                but she wanted to leave early so she made a disaster in my head!
              </td><td class="svelte-1qutzp7">negative </td><td class="svelte-1qutzp7">100</td> <td class="svelte-1qutzp7">Not Adversarial</td></tr> <tr><td class="svelte-1qutzp7">Low Confidence AE </td><td class="svelte-1qutzp7">I went there today! The cut was <b>[[monstrous]]</b>! I have an
                awful experience. They lady that cut my hair was
                <b>[[fantastic]]</b> but she wanted to leave early so she made a
                disaster in my head!
              </td><td class="svelte-1qutzp7">positive </td><td class="svelte-1qutzp7">61</td> <td class="svelte-1qutzp7">Adversarial</td></tr> <tr><td class="svelte-1qutzp7">High Confidence AE </td><td class="svelte-1qutzp7">I went there today! The cut was <b>[[monstrous]]</b>! I have an
                awful experience. They lady that cut my hair was
                <b>[[marvelous]]</b> but she wanted to leave early so she made a
                disaster in my head!
              </td><td class="svelte-1qutzp7">positive </td><td class="svelte-1qutzp7">90</td> <td class="svelte-1qutzp7">Not Adversarial</td></tr> <tr><td class="svelte-1qutzp7">Close Boundary non-AE </td><td class="svelte-1qutzp7">I went there today! The cut was <b>[[terrible]]</b>! I have an
                awful experience. They lady that cut my hair was
                <b>[[fantastic]]</b> but she wanted to leave early so she made a
                disaster in my head!
              </td><td class="svelte-1qutzp7">negative </td><td class="svelte-1qutzp7">60</td> <td class="svelte-1qutzp7">Adversarial</td></tr></tbody></table></div></div> <div class="text"><h2>Implications for Future Research</h2> <p>As it turns out, many different adversarial example defenses end up
        functioning the same. They are some complex model that effectively
        learns to classify based on confidence. Of course, this is problematic
        because a knowledgable attacker can simply require there attacked sample
        to have a confidence of 90% instead of 50%, and immediately defeat the
        model. In our testing, we even showed this is often not that much
        harder!</p> <p>To address this, we recommended further defemse research use two
        different types of attacks. First, they should use adaptive attacks that
        aim to simultaneously fool the model and prevent defense prediction from
        increasing. Second, they should use high confidence attacks that are
        normal attacks allowed to run until a high confidence.</p></div> <div class="footer svelte-1qutzp7"><p>For more information, visit the project on <a href="https://github.com/bizy-coder/geolocation" target="_blank">GitHub</a>.</p></div></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1jxgyfo"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class Ge extends N{constructor(e){super(),W(this,e,null,Ue,R,{})}}function Re(n){let e,i=`<div class="header"><h1>Hair Curvature Analysis</h1></div> <div class="overview"><h2>Overview</h2> <p>As part of my research with Dr. Tina Lasisi, I worked on updating the
      Fibermorph project which is a project that is used for determining the
      length and curvature of human hairs given microscopic images of them.
      There were three main goals with improving the analysis: improve the ease
      of use, improve the accuracy, and improve the speed. Addressing these
      required coming up with new algorithmic approaches, as well as figuring
      out methods for generating realistic testing data. This discusses some,
      but not all of what went into the project.</p></div> <div class="content"><div class="section"><div class="text"><h2>Algorithmic Problem</h2> <p>The overall problem is to take a noisy image from a microscope, that
          includes some approximately circular arcs, and identify the arcs and
          calculate a best fit. There are a few challenges with this specific
          task. The arcs often overlap, they can occasionally have a bend (which
          should be treated as two separate arcs), they&#39;re blurry, and there can
          be small gaps.</p> <p>Because the problem was challenging, a few approaches were evaluated.
          The first idea was to use a variant of the Hough transform, modified
          for circular arcs, much like is done in <a href="https://www.sciencedirect.com/science/article/abs/pii/016786559580007G">this paper</a>. However, this struggled if the arcs ended up being more elliptical
          in practice. The second method was to skeletonize each line, and then
          experiment with all feasible endpoint combinations and attempt
          classical curve fitting. This approach requires many more heuristics,
          but proved better in the worst cases.</p></div></div> <div class="section"><div class="text"><h2>Algorithm Evaluation</h2> <p>Part of the challenge with this project was the difficulty in
          evaluating new approaches. In addition to improving the UI for
          checking analyses, a priority was placed on generating realistic data
          with known &quot;correct&quot; results. For this, a UI was built out that
          supports custom generating images with different levels of noise,
          blur, color variance, scratches, and types of arcs. For proper
          testing, we need to control whether or not arcs have &quot;bends&quot;, how
          circular/elliptical they are, the clarity and thickness of the arcs,
          and the level of overlap.</p></div></div> <div class="text"><h2>How It Was Made</h2> <p>The project was built using python with Numpy to support efficient
        vectorized operations. Some operations from scikit-image were also used
        to improve image quality. Tkinter was used to create all of the UI
        components.</p></div></div> <div class="footer"><p>For more information, visit the project on <a href="https://github.com/bizy-coder/OptimalBoggleBoard" target="_blank">GitHub</a>.</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-qje2xd"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class Ne extends N{constructor(e){super(),W(this,e,null,Re,R,{})}}const We=""+new URL("../assets/geolocation_augmentations.CyjoJBVq.png",import.meta.url).href,$e=""+new URL("../assets/geolocation_predictions.BK09Ukqj.png",import.meta.url).href,Ke=""+new URL("../assets/geolocation_state_f1_scores.D0ICWe0I.png",import.meta.url).href,Je=""+new URL("../assets/geolocation_top_k_accuracy.BqJSiF7h.png",import.meta.url).href;function Qe(n){let e,i=`<div class="header"><h1>US State Image Geolocation</h1></div> <div class="overview"><h2>Overview</h2> <p>This project explores the challenge of predicting the US state of origin
      for Google Maps images. Using advanced machine learning techniques, we
      developed a model capable of identifying the state based solely on visual
      cues from satellite imagery. This task presents unique challenges due to
      the subtle differences between states and the variety of landscapes within
      each state.</p></div> <div class="content"><h2>Model Architecture</h2> <p>After extensive experimentation, we found that a Vision Transformer (ViT)
      outperformed traditional convolutional neural networks for this task. The
      ViT&#39;s ability to capture long-range dependencies in images proved crucial
      for identifying state-specific features across diverse landscapes.</p> <p>We experimented with multiple training approaches, including
      classification (predicting the state directly), regression (predicting
      latitude and longitude), and hybrid models that combined both tasks. To
      handle partial data where exact coordinates weren&#39;t available, we
      implemented custom loss functions that could train effectively on mixed
      data types.</p> <div class="section" style="margin:0;padding:0;"></div> <div class="section"><div class="text"><p>However, the most significant way to improve performance that we
          discovered was to add many augmentations. From a theoretical
          standpoint, every part of the image could be valuable to making the
          prediction. However, the model would generally only focus on a
          specific influence. To prevent this, augmentations including but not
          limited to: changing image angles, adding blur or color change
          effects, and blocking out significant portions of the image.
          Otherwise, the model did not learn to use the entire image resulting
          in significantly worse overall results, and notably mroe overfitting.</p></div> <div class="image"><figure><img src="${We}" alt="Geolocation Augmentations" style="width:105%; max-width:105%"/> <figcaption>Examples of data augmentation techniques used during training</figcaption></figure></div></div> <div class="section"><div class="image"><figure><img src="${$e}" alt="Geolocation Predictions" style="width:100%; max-width:100%"/> <figcaption>Example inputs and model predictions</figcaption></figure></div></div> <div class="section"><div class="text"><h2>Performance and Insights</h2> <p>Our model achieved an impressive accuracy of over 60% in correctly
          identifying the state from a single image. When allowed to provide its
          top 3 predictions, the accuracy increased to over 80%. This
          performance is particularly noteworthy given the challenging nature of
          the task and the visual similarities between many states.</p> <p>Interestingly, attempts to visualize the model&#39;s decision-making
          process using techniques like GradCAM did not reveal easily
          interpretable patterns. This suggests that the model learns to
          consider the entire image holistically rather than focusing on
          specific landmarks or features.</p></div> <div class="image"><figure><img src="${Ke}" alt="State F1 Scores" style="width:105%; max-width:105%"/> <figcaption>F1 scores for each US state</figcaption></figure></div></div> <div class="section"><div class="text"><h2>Dataset and Training</h2> <p>The model was trained on a dataset of 10,000 Google Maps images, with
          samples from various locations across each state. Remarkably, we found
          that the model performed well even when trained on just 500 examples
          per state, demonstrating its ability to generalize from limited data.</p> <p>We employed a range of data augmentation techniques to enhance the
          model&#39;s robustness and prevent overfitting. These included random
          rotations, flips, and color adjustments to simulate variations in
          lighting and seasonal changes.</p></div> <div class="image"><figure><img src="${Je}" alt="Top-k Accuracy" style="width:105%; max-width:105%"/> <figcaption>Model accuracy for different values of k in top-k predictions</figcaption></figure></div></div> <div class="text"><h2>Technical Implementation</h2> <p>The project was built using the FastAI library, which provided a
        flexible framework for implementing custom model architectures and loss
        functions. We extended FastAI&#39;s capabilities by developing specialized
        heads for our multi-task learning approach and implementing custom loss
        functions to handle partial data.</p> <p>The Vision Transformer architecture was chosen for its superior
        performance in our initial experiments. We fine-tuned pre-trained ViT
        models, adapting them to our specific geolocation task through careful
        hyperparameter optimization and custom training routines.</p></div></div> <div class="footer"><p>For more information and access to the code, please visit the project
      repository on GitHub (link to be added).</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1x8krtk"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class Xe extends N{constructor(e){super(),W(this,e,null,Qe,R,{})}}function Ye(n){let e,i=`<div class="header"><h1>Kattis Contest Replay</h1></div> <div class="overview"><h2>Overview</h2> <p>Kattis is a popular platform for competitive programming, but it lacks a
      feature to replay past contests. This project addresses that gap by
      creating a website that combines multiple Kattis contests, allowing users
      to compare contests or practice alongside a replayed scoreboard as if they
      were part of the original event.</p></div> <div class="content"><div class="section"><div class="text"><h2>The Challenge</h2> <p>While Kattis excels in hosting competitive programming contests, the
          inability to replay past events poses a significant limitation for
          practice and analysis. This feature is particularly crucial for
          schools and competitive programmers looking to improve their skills by
          simulating real contest environments.</p> <p>Our school faced this challenge multiple times last year, highlighting
          the need for a solution that would allow students to experience the
          dynamic nature of a live scoreboard while practicing with past contest
          problems.</p></div> <div class="image"></div></div> <div class="section"><div class="text"><h2>The Solution</h2> <p>To address this need, I developed a Sveltekit app that serves as a
          comprehensive contest replay platform. The solution consists of two
          main components:</p> <ul><li><strong>Backend:</strong> A system that makes requests to the appropriate
            Kattis contest webpages, scrapes the incoming data, and formats it into
            a JSON structure for easy processing.</li> <li><strong>Frontend:</strong> A user interface built with the help of Shadcn-Svelte,
            providing an intuitive and visually appealing way to view contest standings
            and navigate through the replay.</li></ul></div> <div class="image"></div></div> <div class="text"><h2>Key Features</h2> <ul><li>Ability to combine and compare multiple Kattis contests</li> <li>Real-time scoreboard evolution simulation</li> <li>User-friendly interface for easy navigation and analysis</li> <li>Seamless integration with existing Kattis contest data</li></ul></div></div> <div class="footer"><p>For more information and to contribute to the project, visit the
      <a href="https://github.com/bizy-coder/kattis-contest-replay" target="_blank">GitHub repository</a>.</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1iir5l5"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class Ze extends N{constructor(e){super(),W(this,e,null,Ye,R,{})}}function et(n){let e,i=`<div class="header"><h1>Maximum Leaf Spanning Trees</h1></div> <div class="overview"><h2>Overview</h2> <p>The Maximum Leaf Spanning Tree problem challenges us to find a subset of
      edges in a given graph that forms a spanning tree with the maximum number
      of leaf nodes. As an NP-hard problem, it requires innovative approaches
      beyond traditional algorithms. Our project, developed as part of Penn
      State&#39;s Graduate Algorithm course, introduces novel heuristics and
      transformations that outperform existing methods in both effectiveness and
      optimality proofs.</p></div> <div class="content"><div class="section"><div class="text"><h2>The Challenge</h2> <p>With approximately 40 students tasked to implement the best approach
          possible, common solutions relied on optimizing existing approximation
          algorithms with worst-case guarantees. However, these methods often
          fell short in practical applications, performing relatively poorly
          compared to optimal solutions.</p> <p>Our challenge was twofold: develop a more effective heuristic approach
          and find a way to prove optimality for as many instances as possible,
          something no other team had achieved.</p></div> <div class="image"></div></div> <div class="section"><div class="text"><h2>Our Solution</h2> <p>We developed two key approaches to tackle this problem:</p> <ol><li><strong>Novel Heuristic Approach:</strong> We created a heuristic that
            repeatedly chooses edges based on their &quot;centrality&quot;, quantified by the
            distance to all remaining untouched vertices. Extensive testing showed
            this method significantly outperformed existing approximation approaches.</li> <li><strong>Partial Reduction to 3-SAT:</strong> We developed a novel (partial)
            reduction of the problem to a version of the 3-SAT problem. This allowed
            us to employ state-of-the-art 3-SAT solvers, enabling us to find optimal
            solutions and provide proofs of optimality for about 90% of the problem
            instances.</li></ol></div> <div class="image"></div></div> <div class="text"><h2>Generating Challenging Test Cases</h2> <p>As a final part of the project, we developed a method to generate hard
        test cases:</p> <ol><li>Generate random trees</li> <li>Strategically add edges to &quot;obfuscate&quot; the original tree without
          increasing the potential maximum leaf spanning tree</li> <li>Test difficulty using our heuristics and knowledge of the optimal
          solution</li></ol> <p>This method resulted in test cases demonstrating the largest average gap
        from optimal among all submitted cases, effectively challenging other
        teams&#39; solutions.</p></div> <div class="text"><h2>Results and Impact</h2> <p>The combination of our heuristic approach and 3-SAT reduction method
        yielded impressive results:</p> <ul><li>Solved all but 3 of over 120 test cases at least as well as any other
          team</li> <li>Our heuristic approach alone outperformed the next best method</li> <li>Provided proofs of optimality for ~90% of instances, a unique
          achievement in the class</li></ul></div></div> <div class="footer"><p>For more information and to explore the code, visit the project on
      <a href="https://github.com/bizy-coder/MaxLeafSpanningTree" target="_blank">GitHub</a>.</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1p40ixt"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class tt extends N{constructor(e){super(),W(this,e,null,et,R,{})}}const it=""+new URL("../assets/best_board_transparent.Ddc2lX7X.png",import.meta.url).href,at=""+new URL("../assets/transparent_background_board.CdU3VJZk.gif",import.meta.url).href;function st(n){let e,i=`<div class="header"><h1>Optimal Boggle Boards</h1></div> <div class="overview"><h2>Overview</h2> <p>Word Hunt/Boggle are word games where players find words in a grid of
      letters by connecting adjacent tiles, without reusing any tile in the same
      word. As a fan of Boggle, I became intrigued by the challenge of creating
      the optimal board, one that theoretically yields the highest possible
      score.</p></div> <div class="content"><div class="section"><div class="text"><h2>Scoring Potential</h2> <p>In typical gameplay, players have about one minute to find words and
          accumulate points, often maxing out around 30,000 points on a good
          board. However, significantly higher scores are theoretically
          possible.</p> <p>Efficiently calculating these scores is rather challenging. Looking at
          all 300,000 words each iteration is quite slow. Instead, I build a
          trie out of the input words, and then recursively traverse the trie,
          while efficiently keeping track of visited tiles. This is then easily
          parallelized to search from all of the starting tiles simultaneously</p></div> <div class="image"><figure><img src="${it}" alt="Best Boggle Board" style="width:105%; max-width:105%"/> <figcaption>The highest scoring 4x4 Word Hunt board</figcaption></figure></div></div> <div class="section"><div class="text"><h2>Optimization</h2> <p>To determine the optimal Boggle board, I implemented a genetic
          algorithm for global search with hill climbing for local optimization.
          My initial approach used Simulated Annealing, but often times this
          still was failing to escape local minima. As a result, this Genetic
          Algorithm approach was chosen instead. This approach efficiently
          discovers high-scoring 4x4 boards and can approximate optimal
          configurations for other board sizes and shapes.</p></div> <div class="image"><figure><img src="${at}" alt="Hill Climb Animation" style="width:105%; max-width:105%"/> <figcaption>Hill Climbing approach on a random board</figcaption></figure></div></div> <div class="text"><h2>How It Was Made</h2> <p>The project was originally built from scratch in Python. The core
        searching features were all written in core Python. Matplotlib and
        Imageio were used for creating visualizations.</p> <p>More recently, the code has been rewritten in C++ providing about a ~15x
        speed improvement. This was done to allow searching for larger boards,
        and with the ultimate goal of finding the smallest board that contains
        every word in the scrabble dictionary.</p></div></div> <div class="footer"><p>For more information, visit the project on <a href="https://github.com/bizy-coder/OptimalBoggleBoard" target="_blank">GitHub</a>.</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-btwzmv"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class nt extends N{constructor(e){super(),W(this,e,null,st,R,{})}}function ot(n){let e,i=`<div class="header"><h1>Physics Calculator</h1></div> <div class="overview"><h2>Overview</h2> <p>This project implements an advanced Expression Tree parser in pure Python,
      featuring a sophisticated pattern matching system. It&#39;s capable of
      performing complex mathematical operations including derivatives,
      algebraic simplifications, and variable substitutions. As a practical
      application, the system can handle first-year physics with calculus
      equations, solving for unknown variables, combining and solving systems of
      equations, and converting between different units.</p></div> <div class="content"><div class="section"><div class="text"><h2>The Challenge</h2> <p>Traditional calculator projects in introductory Data Structures
          courses often lack the ability to perform algebraic manipulations or
          handle complex transformations. As a teaching assistant for such a
          course, I aimed to create a more challenging and less publicly
          accessible project that could integrate concepts from concurrent
          Calculus courses.</p> <p>While the initial goal was to incorporate derivative calculations, the
          project&#39;s complexity exceeded the scope of the introductory course.
          This led to the expansion of the project into a more comprehensive and
          flexible system.</p></div> <div class="image"></div></div> <div class="section"><div class="text"><h2>The Solution</h2> <p>The core of this project is a generic pattern matching system that
          allows for versatile manipulation of mathematical expressions. Key
          features include:</p> <ul><li>Expression Tree parsing for arbitrary complex mathematical
            operations</li> <li>Pattern matching system for flexible equation manipulation</li> <li>Ability to perform derivatives, algebraic simplifications, and
            variable substitutions</li> <li>Application to physics equations, including solving for unknowns and
            unit conversions</li></ul></div> <div class="image"></div></div> <div class="text"><h2>Implementation and Future Potential</h2> <p>The approach used in this project is similar to how Abstract Syntax
        Trees are parsed in many programming languages. It also shares
        fundamental principles with advanced Computer Algebra Systems (CAS) like
        Wolfram-Alpha or Sage Math. The main difference lies in the
        implementation of clever heuristics for Expression Tree manipulation,
        which are crucial for efficient equation handling in full-fledged CAS
        systems.</p> <p>While the current implementation relies on brute-force methods for
        manipulating equations, which can be slow for complex expressions, it
        provides a solid foundation for further development. With the addition
        of more sophisticated heuristics, this system could potentially evolve
        into a powerful tool for mathematical and physical computations.</p></div></div> <div class="footer"><p>For more information and to explore the code, visit the project on
      <a href="https://github.com/bizy-coder/physics-calculator" target="_blank">GitHub</a>.</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-16868ew"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class rt extends N{constructor(e){super(),W(this,e,null,ot,R,{})}}function lt(n){let e,i=`<div class="header"><h1>Other Projects</h1></div> <div class="overview"><h2>Overview</h2> <p>Beyond the featured projects, I&#39;ve worked on a variety of other
      interesting and challenging projects across different domains. While these
      projects may not have dedicated pages due to various reasons (including
      having a hard drive crash on me, similarity to other projects, or having
      created them for university course assignments), they represent a diverse
      range of my skills and interests in computer science and artificial
      intelligence.</p></div> <div class="content"><div class="text"><h2>Games AI</h2> <ul><li>Genetic Algorithm for evolving 2048 heuristics used in a expectimax
          search, achieving a 95% win rate and able to provide human player
          feedback</li> <li>Reinforcement learning for a <a href="https://grgrdvrt.com/codevember_2019/9_game/">Tetris + Snake&quot; hybrid game</a></li> <li>Alpha-beta search with PyTkinter visualization for Reversi</li> <li>Simulation analysis of many different games, most notably for Dominion</li></ul></div> <div class="text"><h2>Research-Oriented AI</h2> <ul><li>In depth research presentations on AI security papers</li> <li>Multiple different adversarial example attacks on MNIST images</li> <li>Implementation of Neural Cellular Automata with interactive UI</li> <li>CNNs in NumPy with model visualization</li> <li>Genetic Algorithms for optimizing clustering algorithms by applying
          transformations to each dimension separately, applied to sports
          predictions</li></ul></div> <div class="text"><h2>Web Scraping and Data Analysis</h2> <ul><li>Parsing 30+ years of somewhat unstandardized 10-K annual reports for
          financial research</li> <li>YouTube API data extraction and channel prediction via community
          analysis</li> <li>Standardizing Quiz Bowl questions from various PDF formats into JSON
          files</li> <li>Facebook Messenger log analysis for communication patterns and
          sentiment</li></ul></div> <div class="text"><h2>Video Analysis</h2> <ul><li>Automatic sports highlight extraction based on crowd audio levels</li> <li>Zoom Office Hour content optimization by removing downtime</li></ul></div> <div class="text"><h2>Other Projects I found Fun</h2> <ul><li>Python AST modification to make quick testing easier. Specifically
          improving debugging and at run time changing floating point operations
          to Fractions calculations</li> <li>ASCII art image and video converter, including a fully ascii art video
          player</li> <li>Simple assembly-like language interpreter</li> <li>Brainf*** JIT compiler and code generator with different heuristics
          and string algorithms for short code generation</li></ul></div></div> <div class="footer"><p>For more information about these or other projects, please <a href="mailto:zydney.biz11@gmail.com">contact me</a>.</p></div>`;return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-14b1u1b"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,s){D(t,e,s)},p:T,i:T,o:T,d(t){t&&v(e)}}}class ct extends N{constructor(e){super(),W(this,e,null,lt,R,{})}}function dt(n,e,i){const t=n.slice();return t[20]=e[i],t[22]=i,t}function Ae(n,e,i){const t=n.slice();return t[23]=e[i],t[25]=i,t}function Ce(n){let e,i,t=n[23]+"",s,u,y,m;function f(){return n[9](n[25])}return{c(){e=d("li"),i=d("a"),s=je(t),u=_(),this.h()},l(r){e=h(r,"LI",{class:!0});var p=q(e);i=h(p,"A",{href:!0,class:!0});var S=q(i);s=Pe(S,t),S.forEach(v),u=k(p),p.forEach(v),this.h()},h(){c(i,"href","javascript:void(0);"),c(i,"class","svelte-ohsbpe"),c(e,"class","svelte-ohsbpe")},m(r,p){D(r,e,p),o(e,i),o(i,s),o(e,u),y||(m=Z(i,"click",f),y=!0)},p(r,p){n=r},d(r){r&&v(e),y=!1,m()}}}function ht(n){let e,i,t,s,u,y;return s=new n[20]({}),{c(){e=d("div"),i=d("div"),t=d("div"),me(s.$$.fragment),u=_(),this.h()},l(m){e=h(m,"DIV",{class:!0});var f=q(e);i=h(f,"DIV",{class:!0});var r=q(i);t=h(r,"DIV",{class:!0});var p=q(t);fe(s.$$.fragment,p),p.forEach(v),r.forEach(v),u=k(f),f.forEach(v),this.h()},h(){c(t,"class","card-content svelte-ohsbpe"),c(i,"class","carousel-card svelte-ohsbpe"),c(e,"class","carousel-item svelte-ohsbpe")},m(m,f){D(m,e,f),o(e,i),o(i,t),ve(s,t,null),o(e,u),y=!0},p:T,i(m){y||(re(s.$$.fragment,m),y=!0)},o(m){le(s.$$.fragment,m),y=!1},d(m){m&&v(e),ge(s)}}}function pt(n){let e,i,t,s,u,y,m,f,r,p,S="❮",A,z,L,C,$="❯",E,V,U,F,Q;i=new De({props:{width:"700px"}});let B=ue(n[5]),a=[];for(let l=0;l<B.length;l+=1)a[l]=Ce(Ae(n,B,l));let b=ue(n[4]),x=[];for(let l=0;l<b.length;l+=1)x[l]=ht(dt(n,b,l));return V=new Ee({}),{c(){e=d("main"),me(i.$$.fragment),t=_(),s=d("div"),u=_(),y=d("div"),m=d("ul");for(let l=0;l<a.length;l+=1)a[l].c();f=_(),r=d("div"),p=d("button"),p.textContent=S,A=_(),z=d("div");for(let l=0;l<x.length;l+=1)x[l].c();L=_(),C=d("button"),C.textContent=$,E=_(),me(V.$$.fragment),this.h()},l(l){e=h(l,"MAIN",{class:!0});var w=q(e);fe(i.$$.fragment,w),t=k(w),s=h(w,"DIV",{style:!0}),q(s).forEach(v),u=k(w),y=h(w,"DIV",{class:!0});var g=q(y);m=h(g,"UL",{class:!0});var M=q(m);for(let O=0;O<a.length;O+=1)a[O].l(M);M.forEach(v),g.forEach(v),f=k(w),r=h(w,"DIV",{class:!0});var K=q(r);p=h(K,"BUTTON",{class:!0,"data-svelte-h":!0}),I(p)!=="svelte-d1iwxd"&&(p.textContent=S),A=k(K),z=h(K,"DIV",{class:!0});var ee=q(z);for(let O=0;O<x.length;O+=1)x[O].l(ee);ee.forEach(v),L=k(K),C=h(K,"BUTTON",{class:!0,"data-svelte-h":!0}),I(C)!=="svelte-1b8mq7e"&&(C.textContent=$),K.forEach(v),E=k(w),fe(V.$$.fragment,w),w.forEach(v),this.h()},h(){J(s,"margin-bottom","5rem"),c(m,"class","svelte-ohsbpe"),c(y,"class","selection-panel svelte-ohsbpe"),c(p,"class","carousel-button prev svelte-ohsbpe"),c(z,"class","carousel-content svelte-ohsbpe"),c(C,"class","carousel-button next svelte-ohsbpe"),c(r,"class","carousel-container svelte-ohsbpe"),c(e,"class","svelte-ohsbpe")},m(l,w){D(l,e,w),ve(i,e,null),o(e,t),o(e,s),o(e,u),o(e,y),o(y,m);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(m,null);o(e,f),o(e,r),o(r,p),n[10](p),o(r,A),o(r,z);for(let g=0;g<x.length;g+=1)x[g]&&x[g].m(z,null);n[11](z),o(r,L),o(r,C),n[12](C),n[13](r),o(e,E),ve(V,e,null),U=!0,F||(Q=[Z(p,"click",n[7]),Z(C,"click",n[6])],F=!0)},p(l,[w]){if(w&288){B=ue(l[5]);let g;for(g=0;g<B.length;g+=1){const M=Ae(l,B,g);a[g]?a[g].p(M,w):(a[g]=Ce(M),a[g].c(),a[g].m(m,null))}for(;g<a.length;g+=1)a[g].d(1);a.length=B.length}},i(l){if(!U){re(i.$$.fragment,l);for(let w=0;w<b.length;w+=1)re(x[w]);re(V.$$.fragment,l),U=!0}},o(l){le(i.$$.fragment,l),x=x.filter(Boolean);for(let w=0;w<x.length;w+=1)le(x[w]);le(V.$$.fragment,l),U=!1},d(l){l&&v(e),ge(i),qe(a,l),n[10](null),qe(x,l),n[11](null),n[12](null),n[13](null),ge(V),F=!1,ye(Q)}}}function ut(){window.scrollTo({top:0,behavior:"smooth"})}function mt(n,e,i){let t=0,s,u,y=[{component:nt,name:"Optimal Boggle"},{component:Ve,name:"Airport  Management System"},{component:Xe,name:"AI Geolocation"},{component:Ge,name:"Adversarial NLP"},{component:Ne,name:"Hair Analysis"},{component:Ze,name:"Kattis Contest Replay"},{component:tt,name:"Maximum Leaf Trees"},{component:rt,name:"Physics Calculator"},{component:ct,name:"Other Projects"}],m=y.map(a=>a.component),f=y.map(a=>a.name),r,p;function S(a){ut();const b=s.children;b[t].style.opacity="0",b[t].style.display="none",b[a].style.opacity="1",b[t].style.display="flex",i(0,s.style.transform=`translateX(-${a*100}%)`,s);const l=b[a].querySelector(".carousel-card").querySelector(".card-content").getBoundingClientRect().height+54+"px";i(0,s.style.height=l,s),t=a,A()}function A(){const b=document.querySelector(".carousel-card").getBoundingClientRect(),x=74,l=Math.max(b.top+x,x);i(2,r.style.top=`${l}px`,r),i(3,p.style.top=`${l}px`,p)}function z(){const a=t<m.length-1?t+1:0;C(a)}function L(){const a=t>0?t-1:m.length-1;C(a)}function C(a){S(a);const b=f[a].toLowerCase().replace(/\s+/g,"-"),x=new URL(window.location.href);x.searchParams.set("project",b),window.history.pushState({index:a},"",x)}function $(a){a.state&&typeof a.state.index=="number"?S(a.state.index):E()}function E(){const b=new URLSearchParams(window.location.search).get("project");if(b){const x=f.findIndex(l=>l.toLowerCase().replace(/\s+/g,"-")===b);if(x!==-1)return x}return 0}Me(()=>{const a=s.children;a[t].style.opacity="1",i(0,s.style.transform="translateX(0%)",s),i(0,s.style.display="flex",s),S(0),A(),window.addEventListener("scroll",A),window.addEventListener("resize",A),window.addEventListener("popstate",$);const b=E();S(b),window.history.replaceState({index:b},"",window.location.href),E()}),He(()=>{typeof window<"u"&&(window.removeEventListener("popstate",$),window.removeEventListener("scroll",A),window.removeEventListener("resize",A))});const V=a=>C(a);function U(a){oe[a?"unshift":"push"](()=>{r=a,i(2,r)})}function F(a){oe[a?"unshift":"push"](()=>{s=a,i(0,s)})}function Q(a){oe[a?"unshift":"push"](()=>{p=a,i(3,p)})}function B(a){oe[a?"unshift":"push"](()=>{u=a,i(1,u)})}return[s,u,r,p,m,f,z,L,C,V,U,F,Q,B]}class yt extends N{constructor(e){super(),W(this,e,mt,pt,R,{})}}export{yt as component};
