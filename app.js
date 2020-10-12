Vue.createApp({
  data() {
    return {
      output: '',
      result: '',
    };
  },
  methods: {
    buttonPress() {
      alert('Button is Pressed!');
    },
    outputOnKeydown(event) {
      this.output = event.target.value;
    },
    outputOnEnter(event) {
      this.result = event.target.value;
    },
  },
}).mount('#assignment');
