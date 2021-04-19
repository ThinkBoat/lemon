Component({
  properties: {
    // close-circle-fill | check-circle-fill | right
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 32,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * swan.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    quot: '"',
    svgSize: 32 / 750 * swan.getSystemInfoSync().windowWidth,
    isStr: true,
  },
});
