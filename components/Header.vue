<template>
  <header>
    <nav
      class="bg-pink-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto w-full sm:w-4/5 max-w-screen-2xl"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            :src="require('../src/assets/img/rocket.svg')"
            class="mr-3 h-6 sm:h-9"
            alt="Space News Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Space News</span
          >
        </a>
        <!-- TODO: logout button when Auth middleware will be implemented  -->
        <!-- <div class="flex items-center lg:order-2">
            <a href="/login" class="text-pink-900 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                Logout
            </a>
        </div> -->
      </div>
    </nav>
  </header>
</template>
