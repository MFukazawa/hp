<template>
  <footer class="border-b-4 border-black w-full bg-white">
    <div class="p-2 mx-auto flex flex-wrap justify-center items-center">
      <a
        target="_blank"
        href="https://forms.gle/EQxHCGsdg9buMBm26"
        class="font-bold text-4xl tracking-wide blur"
      >
        Let's talk.
      </a>
    </div>
    <div class="p-2 mx-auto">
      <ul class="flex justify-center items-center p-4">
        <li class="mx-4 text-2xl blur">
          <a href="https://gitlab.com/MFukazawa" target="_blank">
            <font-awesome :icon="['fab', 'gitlab']" />
          </a>
        </li>
        <li class="mx-4 text-2xl blur">
          <a href="https://github.com/MFukazawa" target="_blank">
            <font-awesome :icon="['fab', 'github']" />
          </a>
        </li>
        <li class="mx-4 text-2xl blur">
          <a
            href="https://www.linkedin.com/in/micah-fukazawa-99735a52/"
            target="_blank"
          >
            <font-awesome :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li class="mx-4 text-2xl blur">
          <a href="https://www.twitter.com/MicahFukazawa">
            <font-awesome :icon="['fab', 'twitter']" />
          </a>
        </li>
      </ul>
      <div class="text-center text-xs">Copyright Micah Fukazawa © 2020</div>
      <div class="text-center pt-2 unsplash">
        <span
          >Photo by
          <a
            href="https://unsplash.com/@kahika?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Kahika</a
          >
          on
          <a
            class="blur"
            href="https://unsplash.com/s/photos/black-and-white-japan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Unsplash</a
          ></span
        >
      </div>
    </div>
  </footer>
</template>