export default {
  data() {
    return {
      searchBikes: '',
      showCSSButton: false,
      bikeHeaders: [
        {
          text: 'Make',
          align: 'start',
          value: 'Make',
        },
        {
          text: 'Model',
          align: 'start',
          sortable: false,
          value: 'Model',
        },
        {
          text: 'Year',
          align: 'start',
          sortable: false,
          value: 'Year',
        },
        {
          text: 'Displacement',
          align: 'start',
          sortable: false,
          value: 'Displacement',
        },
        {
          text: 'Price',
          align: 'start',
          sortable: false,
          value: 'Price',
        },
        {
          text: 'Terrain',
          align: 'start',
          sortable: false,
          value: 'Terrain',
        },
        {
          text: 'Description',
          align: 'start',
          sortable: false,
          value: 'Description',
        },
      ],
      bikeList: [],
    }
  },
  mounted() {
    this.getBikes()
  },
  methods: {
    async getBikes() {
      // debugger
      try {
        let response = await this.$services.stockservice.getBikes()
        if (response.status === 200) {
          this.bikeList = response.data
          this.$toast.success('Successfully retrieved bikes')
        } else {
          this.$toast.error('An error has occurred' + ' ' + response)
        }
      } catch (error) {
        this.$toast.error('An error has occurred' + ' ' + error)
      }
    },
    testButton() {
      this.$toast.success('Yes, this is a pure css stylized button')
    },
  },
}
