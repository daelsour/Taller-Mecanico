<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
 
    </a>

    <a role="button" class="navbar-burger" :class="{'is-active':isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':isOpen}">
    <div class="navbar-start">

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            const status = !this.isOpen
            this.isOpen = status
        }
    }
}
</script>