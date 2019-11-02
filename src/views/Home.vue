<template>
  <div class="home">
    {{ version }}
  </div>
</template>

<script>
// @ is an alias to /src
import project from '../../package.json';

export default {
  name: 'home',
  data() {
    return {
      version: project.version,
    };
  },
};
</script>
