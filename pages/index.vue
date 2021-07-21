<template>
  <div class="grid grid-cols-12 gap-2">
    <!-- Side card -->
    <div class="relative col-span-4 bg-indigo-900 text-white">
      <div class="absolute px-10 py-4">
        <img class="object-contain" src="~/assets/geoqi-logo.png" alt="Geoqi" />
      </div>
      <div class="px-8 pt-24 pb-8 text-sm mt-32 bg-gray-700">
        A microservices based integrated platform. A geospatial big data
        visualization engine, with the ability to connect with multiple types of
        datasets. Built around a data lake and microservices-based architecture,
        this engine is capable of handling extremely large geospatial datasets.
      </div>
      <div class="p-8 my-8 bg-gray-700">
        <p class="text-2xl pb-2">Rular School Mapping</p>
        <div class="text-sm">
          GeoSpoc uses Deep Learning to unlock the potential of satellite images
          to map schools in rular regions.
        </div>
      </div>
      <div class="p-8 my-8 bg-gray-700">
        <p class="text-2xl pb-2">Hospital Detection</p>
        <div class="text-sm">
          Detecting hospitals and a single visualization platform to explore vis
          Deep Learning Research & Remote Sensing for the development and
          exchange of best practices.
        </div>
      </div>
    </div>

    <!-- Main card -->
    <div class="col-span-8 p-4">
      <div class="flex items-center">
        <div class="flex-1">
          <p class="text-2xl">Introduction</p>
          <p class="pr-20 py-2 text-sm">
            GeoSpoc uses Deep Learning to unlock the potential of satellite
            images. We will be developing two separate models; one to detect
            rural Schools and another for Hospitals and a single visualization
            platform that hold outcomes from both the models. Maharashtra, our
            area of interest in this phase is likely to be extended pan INDIA
            post croudsourced validation of the model predictions! This is an
            initiative funded by the UNICEF to establish an inclusive community
            of Deep Learning Researchers & Remote Sensing Scientists for the
            development and exchange of best practices in Deep Learning for
            Earth Objects Detection (Schools/Hospitals in this case!).
          </p>
        </div>
        <div class="flex-1">
          <img src="~/assets/school-childrens.png" alt="Geoqi" />
        </div>
      </div>

      <!-- Bullets & Quick links-->
      <div class="flex items-center py-10">
        <!-- Bullets row 1 -->
        <div class="flex-1">
          <div class="flex-1 pb-10">
            <div class="text-2xl mb-4">Codebase For Schools</div>
            <div class="text-sm">
              Here is the description and the link to the page contianing the
              codebase.
            </div>
          </div>
          <div>
            <div class="text-2xl mb-4">Crowsdsource Validation Platform</div>
            <div class="text-sm">
              Here are the contents describing the Crowsdsource Validation
              Platform a link to it.
            </div>
          </div>
        </div>

        <!-- Bullets row 2 -->
        <div class="flex-1">
          <div class="flex-1 pb-10">
            <div class="text-2xl mb-4">Documentation For Schools</div>
            <div class="text-sm">
              Here are the contents describing the documentation and a link to
              it.
            </div>
          </div>

          <div>
            <div class="text-2xl mb-4">Results Portal For Schools</div>
            <div class="text-sm">
              Here are the contents describing the Results Portal For Schools
              and a link to it.
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex-1 text-center text-gray-700">
          <div class="text-2xl mb-4">Quick Links</div>
          <div class="mb-2 hover:text-blue-700 hover:underline">
            <nuxt-link to="/about">What's this about?</nuxt-link>
          </div>
          <div class="mb-2 hover:text-blue-700 hover:underline">
            <nuxt-link to="/objective">Objective</nuxt-link>
          </div>
          <div class="mb-2 hover:text-blue-700 hover:underline">
            <nuxt-link to="/quick-start"
              >Development Quickstart Guide</nuxt-link
            >
          </div>
          <div class="mb-2 hover:text-blue-700 hover:underline">
            <nuxt-link to="/results-portal">Rural Schools Portal</nuxt-link>
          </div>
          <div class="mb-2 hover:text-blue-700 hover:underline">
            <nuxt-link to="/project-trials">Project trials</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api';
  export default defineComponent({
    name: 'Index',
  });
</script>
