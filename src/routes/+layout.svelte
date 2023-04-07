<script>
  import '../app.css';
</script>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <title>Sidebar Layout</title>
  </head>
  <body class="bg-gray-200">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="bg-blue-600 w-64 flex flex-col p-4 text-white">
        <div class="mb-8">
          <h1 class="text-2xl font-semibold mb-2">Brand</h1>
          <span class="text-sm">Your tagline or description</span>
        </div>
        <nav>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <!-- <span class="material-icons">dashboard</span> -->
                <span>For You</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <!-- <span class="material-icons">inbox</span> -->
                <span>Browse</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <!-- <span class="material-icons">people</span> -->
                <span>Project 1</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <!-- <span class="material-icons">settings</span> -->
                <span>Project 2</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- Content -->
      <div class="flex-1 flex-col bg-white p-6">
        <div>PLAYER</div>
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-semibold mb-4">Content Area</h1>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Action</button>
        </div>
        <p class="text-gray-700 mb-4">Your content goes here...</p>
        <slot />
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Section 1</h3>
            <p>Some description for Section 1</p>
          </div>
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Section 2</h3>
            <p>Some description for Section 2</p>
          </div>
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Section 3</h3>
            <p>Some description for Section 3</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
