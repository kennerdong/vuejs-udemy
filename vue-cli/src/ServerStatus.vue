<template>
		<div>
      <div>
        <p>Server status: {{status}}</p>
        <button @click="changeStatus">Change Status</button>
      </div>
		</div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

