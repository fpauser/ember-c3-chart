import Route from '@ember/routing/route';

const SAMPLE_DATA = {
  "axis": {
    "x": {
      "label": "histname",
      "type": "category"
    },
    "y": {
      "label": "Count"
    }
  },
  "data": {
    "bar": {
      "width": {
        "ratio": 0.7
      }
    },
    "colors": {},
    "columns": [
      ["Category 0", 0],
      ["Category 1", 1],
      ["Category 2", 2],
      ["Category 3", 3],
      ["Category 4", 4],
      ["Category 5", 5],
      ["Category 6", 6],
      ["Category 7", 7],
      ["Category 8", 8],
      ["Category 9", 9]
    ],
    "empty": {
      "label": {
        "text": "No Data"
      }
    },
    "keys": {
      "value": []
    },
    "type": "bar"
  },
  "weight": 1
};

export default Route.extend({
  setupController(controller) {
    controller.set('axis', SAMPLE_DATA.axis);
    controller.set('data', SAMPLE_DATA.data);
  }
})
