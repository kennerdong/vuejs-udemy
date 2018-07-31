<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<h2>Test</h2>'"></p>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight="'red'">Color this</p>
                <p v-highlight:background="'red'">Color this</p>
                <p v-highlight.delayed="'red'">Color this in 3 seconds</p>
                <p v-local-highlight.delayed="'red'">Color this local highlight in 1 second</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	directives: {
		'local-highlight': {
			bind(el, binding, vnode) {
				var delay = 0
				if (binding.modifiers['delayed']) {
					delay = 1000;
				}
				setTimeout(() => {
					if (binding.arg == 'background') {
						el.style.backgroundColor = binding.value
					} else {
						el.style.color = binding.value
					}
				}, delay)
			}
		}
	}
}
</script>

<style>
</style>
