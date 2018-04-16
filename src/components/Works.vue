<template>
	<div>
		<h1>WORKS</h1>
	</div>
</template>

<script>
	export default {
		name: 'Works',
	  data: function() {
	    return {

	    }
	  },
		mounted: function() {
			this.$emit('childs-event', 'works', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
		}
	}
</script>
