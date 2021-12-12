import * as mongoose from "mongoose";
import {Schema} from "mongoose";

(async () => {
  const conn = await mongoose.connect('mongodb://tester:testing123456@localhost:27017/test?authSource=test_database');
  console.log(conn);

  const doc = {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bd9abdc18478824909938628dcc574aa",
    "label": "Strawberry Angel-Food Trifle",
    "image": "https://www.edamam.com/web-img/994/994f3dbcb9f132d3c9863df695f5afa1.jpg",
    "images": {
      "THUMBNAIL": {
        "url": "https://www.edamam.com/web-img/994/994f3dbcb9f132d3c9863df695f5afa1-s.jpg",
        "width": 100,
        "height": 100
      },
      "SMALL": {
        "url": "https://www.edamam.com/web-img/994/994f3dbcb9f132d3c9863df695f5afa1-m.jpg",
        "width": 200,
        "height": 200
      },
      "REGULAR": {
        "url": "https://www.edamam.com/web-img/994/994f3dbcb9f132d3c9863df695f5afa1.jpg",
        "width": 300,
        "height": 300
      }
    },
    "source": "Epicurious",
    "url": "https://www.epicurious.com/recipes/food/views/strawberry-angel-food-trifle-353012",
    "shareAs": "http://www.edamam.com/recipe/strawberry-angel-food-trifle-bd9abdc18478824909938628dcc574aa/food",
    "yield": 8,
    "dietLabels": [
      "Low-Fat"
    ],
    "healthLabels": [
      "Low Potassium",
      "Kidney-Friendly",
      "Vegetarian",
      "Pescatarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Soy-Free",
      "Fish-Free",
      "Shellfish-Free",
      "Pork-Free",
      "Red-Meat-Free",
      "Crustacean-Free",
      "Celery-Free",
      "Mustard-Free",
      "Sesame-Free",
      "Lupine-Free",
      "Mollusk-Free",
      "Alcohol-Free",
      "No oil added",
      "Kosher"
    ],
    "cautions": [
      "Sulfites"
    ],
    "ingredientLines": [
      "1 pound frozen strawberries",
      "1/2 cup sugar",
      "1 store-bought angel-food cake",
      "16-ounce container fat-free or full-fat Greek yogurt"
    ],
    "ingredients": [
      {
        "text": "1 pound frozen strawberries",
        "quantity": 1,
        "measure": "pound",
        "food": "frozen strawberries",
        "weight": 453.59237,
        "foodCategory": "fruit",
        "foodId": "food_auuu2f6btnbwd8b5vkk3gbzrsr7s",
        "image": "https://www.edamam.com/food-img/cc2/cc26ebaab395eaf79ca6b20479a37c3a.jpg"
      },
      {
        "text": "1/2 cup sugar",
        "quantity": 0.5,
        "measure": "cup",
        "food": "sugar",
        "weight": 100,
        "foodCategory": "sugars",
        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
      },
      {
        "text": "1 store-bought angel-food cake",
        "quantity": 1,
        "measure": "<unit>",
        "food": "angel-food cake",
        "weight": 340,
        "foodCategory": "quick breads and pastries",
        "foodId": "food_b2t8k9pa0rqlqsbck5nszbsnvc7v",
        "image": "https://www.edamam.com/food-img/e57/e57060f75296eb8cb969ba20da62131f.jpg"
      },
      {
        "text": "16-ounce container fat-free or full-fat Greek yogurt",
        "quantity": 16,
        "measure": "ounce",
        "food": "full-fat Greek yogurt",
        "weight": 453.59237,
        "foodCategory": "yogurt",
        "foodId": "food_bllzl82a5fkj4yanmzoztapdyryz",
        "image": "https://www.edamam.com/food-img/689/6891387401f579242e7303ce8ec00e18.jpg"
      }
    ],
    "calories": 1817.5826914,
    "totalWeight": 1347.1847400000001,
    "totalTime": 0,
    "cuisineType": [
      "french"
    ],
    "mealType": [
      "lunch/dinner"
    ],
    "dishType": [
      "desserts"
    ],
    "totalNutrients": {
      "ENERC_KCAL": {
        "label": "Energy",
        "quantity": 1817.5826914,
        "unit": "kcal"
      },
      "FAT": {
        "label": "Fat",
        "quantity": 27.259347217000002,
        "unit": "g"
      },
      "FASAT": {
        "label": "Saturated",
        "quantity": 15.407163752200002,
        "unit": "g"
      },
      "FATRN": {
        "label": "Trans",
        "quantity": 0,
        "unit": "g"
      },
      "FAMS": {
        "label": "Monounsaturated",
        "quantity": 0.3094388555,
        "unit": "g"
      },
      "FAPU": {
        "label": "Polyunsaturated",
        "quantity": 1.4927398798,
        "unit": "g"
      },
      "CHOCDF": {
        "label": "Carbs",
        "quantity": 352.881531591,
        "unit": "g"
      },
      "CHOCDF.net": {
        "label": "Carbohydrates (net)",
        "quantity": 0,
        "unit": "g"
      },
      "FIBTG": {
        "label": "Fiber",
        "quantity": 14.625439770000002,
        "unit": "g"
      },
      "SUGAR": {
        "label": "Sugars",
        "quantity": 135.452360282,
        "unit": "g"
      },
      "SUGAR.added": {
        "label": "Sugars, added",
        "quantity": 99.8,
        "unit": "g"
      },
      "PROCNT": {
        "label": "Protein",
        "quantity": 55.122690201000005,
        "unit": "g"
      },
      "CHOLE": {
        "label": "Cholesterol",
        "quantity": 60.32778521000001,
        "unit": "mg"
      },
      "NA": {
        "label": "Sodium",
        "quantity": 2768.363406479,
        "unit": "mg"
      },
      "CA": {
        "label": "Calcium",
        "quantity": 851.984812279,
        "unit": "mg"
      },
      "MG": {
        "label": "Magnesium",
        "quantity": 90.6951607,
        "unit": "mg"
      },
      "K": {
        "label": "Potassium",
        "quantity": 989.5167076,
        "unit": "mg"
      },
      "FE": {
        "label": "Iron",
        "quantity": 5.219942775,
        "unit": "mg"
      },
      "ZN": {
        "label": "Zinc",
        "quantity": 0.8376700810000001,
        "unit": "mg"
      },
      "P": {
        "label": "Phosphorus",
        "quantity": 1160.5670080999998,
        "unit": "mg"
      },
      "VITA_RAE": {
        "label": "Vitamin A",
        "quantity": 9.071847400000001,
        "unit": "µg"
      },
      "VITC": {
        "label": "Vitamin C",
        "quantity": 186.88005644000003,
        "unit": "mg"
      },
      "THIA": {
        "label": "Thiamin (B1)",
        "quantity": 0.44659032139999993,
        "unit": "mg"
      },
      "RIBF": {
        "label": "Riboflavin (B2)",
        "quantity": 1.8562291768999999,
        "unit": "mg"
      },
      "NIA": {
        "label": "Niacin (B3)",
        "quantity": 5.0977967494000005,
        "unit": "mg"
      },
      "VITB6A": {
        "label": "Vitamin B6",
        "quantity": 0.2324058636,
        "unit": "mg"
      },
      "FOLDFE": {
        "label": "Folate equivalent (total)",
        "quantity": 270.9107029,
        "unit": "µg"
      },
      "FOLFD": {
        "label": "Folate (food)",
        "quantity": 87.31070290000001,
        "unit": "µg"
      },
      "FOLAC": {
        "label": "Folic acid",
        "quantity": 108.8,
        "unit": "µg"
      },
      "VITB12": {
        "label": "Vitamin B12",
        "quantity": 0.204,
        "unit": "µg"
      },
      "VITD": {
        "label": "Vitamin D",
        "quantity": 0,
        "unit": "µg"
      },
      "TOCPHA": {
        "label": "Vitamin E",
        "quantity": 1.3154178730000001,
        "unit": "mg"
      },
      "VITK1": {
        "label": "Vitamin K",
        "quantity": 9.979032140000003,
        "unit": "µg"
      },
      "Sugar.alcohol": {
        "label": "Sugar alcohol",
        "quantity": 0,
        "unit": "g"
      },
      "WATER": {
        "label": "Water",
        "quantity": 520.9970552890001,
        "unit": "g"
      }
    },
    "totalDaily": {
      "ENERC_KCAL": {
        "label": "Energy",
        "quantity": 90.87913456999999,
        "unit": "%"
      },
      "FAT": {
        "label": "Fat",
        "quantity": 41.93745725692308,
        "unit": "%"
      },
      "FASAT": {
        "label": "Saturated",
        "quantity": 77.035818761,
        "unit": "%"
      },
      "CHOCDF": {
        "label": "Carbs",
        "quantity": 117.62717719700001,
        "unit": "%"
      },
      "FIBTG": {
        "label": "Fiber",
        "quantity": 58.501759080000014,
        "unit": "%"
      },
      "PROCNT": {
        "label": "Protein",
        "quantity": 110.24538040200001,
        "unit": "%"
      },
      "CHOLE": {
        "label": "Cholesterol",
        "quantity": 20.10926173666667,
        "unit": "%"
      },
      "NA": {
        "label": "Sodium",
        "quantity": 115.34847526995834,
        "unit": "%"
      },
      "CA": {
        "label": "Calcium",
        "quantity": 85.1984812279,
        "unit": "%"
      },
      "MG": {
        "label": "Magnesium",
        "quantity": 21.59408588095238,
        "unit": "%"
      },
      "K": {
        "label": "Potassium",
        "quantity": 21.053546970212768,
        "unit": "%"
      },
      "FE": {
        "label": "Iron",
        "quantity": 28.99968208333333,
        "unit": "%"
      },
      "ZN": {
        "label": "Zinc",
        "quantity": 7.615182554545456,
        "unit": "%"
      },
      "P": {
        "label": "Phosphorus",
        "quantity": 165.79528687142854,
        "unit": "%"
      },
      "VITA_RAE": {
        "label": "Vitamin A",
        "quantity": 1.0079830444444446,
        "unit": "%"
      },
      "VITC": {
        "label": "Vitamin C",
        "quantity": 207.6445071555556,
        "unit": "%"
      },
      "THIA": {
        "label": "Thiamin (B1)",
        "quantity": 37.21586011666666,
        "unit": "%"
      },
      "RIBF": {
        "label": "Riboflavin (B2)",
        "quantity": 142.78685976153844,
        "unit": "%"
      },
      "NIA": {
        "label": "Niacin (B3)",
        "quantity": 31.861229683750004,
        "unit": "%"
      },
      "VITB6A": {
        "label": "Vitamin B6",
        "quantity": 17.877374123076923,
        "unit": "%"
      },
      "FOLDFE": {
        "label": "Folate equivalent (total)",
        "quantity": 67.727675725,
        "unit": "%"
      },
      "VITB12": {
        "label": "Vitamin B12",
        "quantity": 8.5,
        "unit": "%"
      },
      "VITD": {
        "label": "Vitamin D",
        "quantity": 0,
        "unit": "%"
      },
      "TOCPHA": {
        "label": "Vitamin E",
        "quantity": 8.769452486666667,
        "unit": "%"
      },
      "VITK1": {
        "label": "Vitamin K",
        "quantity": 8.315860116666668,
        "unit": "%"
      }
    },
    "digest": [
      {
        "label": "Fat",
        "tag": "FAT",
        "schemaOrgTag": "fatContent",
        "total": 27.259347217000002,
        "hasRDI": true,
        "daily": 41.93745725692308,
        "unit": "g",
        "sub": [
          {
            "label": "Saturated",
            "tag": "FASAT",
            "schemaOrgTag": "saturatedFatContent",
            "total": 15.407163752200002,
            "hasRDI": true,
            "daily": 77.035818761,
            "unit": "g"
          },
          {
            "label": "Trans",
            "tag": "FATRN",
            "schemaOrgTag": "transFatContent",
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Monounsaturated",
            "tag": "FAMS",
            "schemaOrgTag": null,
            "total": 0.3094388555,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Polyunsaturated",
            "tag": "FAPU",
            "schemaOrgTag": null,
            "total": 1.4927398798,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      {
        "label": "Carbs",
        "tag": "CHOCDF",
        "schemaOrgTag": "carbohydrateContent",
        "total": 352.881531591,
        "hasRDI": true,
        "daily": 117.62717719700001,
        "unit": "g",
        "sub": [
          {
            "label": "Carbs (net)",
            "tag": "CHOCDF.net",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Fiber",
            "tag": "FIBTG",
            "schemaOrgTag": "fiberContent",
            "total": 14.625439770000002,
            "hasRDI": true,
            "daily": 58.501759080000014,
            "unit": "g"
          },
          {
            "label": "Sugars",
            "tag": "SUGAR",
            "schemaOrgTag": "sugarContent",
            "total": 135.452360282,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Sugars, added",
            "tag": "SUGAR.added",
            "schemaOrgTag": null,
            "total": 99.8,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      {
        "label": "Protein",
        "tag": "PROCNT",
        "schemaOrgTag": "proteinContent",
        "total": 55.122690201000005,
        "hasRDI": true,
        "daily": 110.24538040200001,
        "unit": "g"
      },
      {
        "label": "Cholesterol",
        "tag": "CHOLE",
        "schemaOrgTag": "cholesterolContent",
        "total": 60.32778521000001,
        "hasRDI": true,
        "daily": 20.10926173666667,
        "unit": "mg"
      },
      {
        "label": "Sodium",
        "tag": "NA",
        "schemaOrgTag": "sodiumContent",
        "total": 2768.363406479,
        "hasRDI": true,
        "daily": 115.34847526995834,
        "unit": "mg"
      },
      {
        "label": "Calcium",
        "tag": "CA",
        "schemaOrgTag": null,
        "total": 851.984812279,
        "hasRDI": true,
        "daily": 85.1984812279,
        "unit": "mg"
      },
      {
        "label": "Magnesium",
        "tag": "MG",
        "schemaOrgTag": null,
        "total": 90.6951607,
        "hasRDI": true,
        "daily": 21.59408588095238,
        "unit": "mg"
      },
      {
        "label": "Potassium",
        "tag": "K",
        "schemaOrgTag": null,
        "total": 989.5167076,
        "hasRDI": true,
        "daily": 21.053546970212768,
        "unit": "mg"
      },
      {
        "label": "Iron",
        "tag": "FE",
        "schemaOrgTag": null,
        "total": 5.219942775,
        "hasRDI": true,
        "daily": 28.99968208333333,
        "unit": "mg"
      },
      {
        "label": "Zinc",
        "tag": "ZN",
        "schemaOrgTag": null,
        "total": 0.8376700810000001,
        "hasRDI": true,
        "daily": 7.615182554545456,
        "unit": "mg"
      },
      {
        "label": "Phosphorus",
        "tag": "P",
        "schemaOrgTag": null,
        "total": 1160.5670080999998,
        "hasRDI": true,
        "daily": 165.79528687142854,
        "unit": "mg"
      },
      {
        "label": "Vitamin A",
        "tag": "VITA_RAE",
        "schemaOrgTag": null,
        "total": 9.071847400000001,
        "hasRDI": true,
        "daily": 1.0079830444444446,
        "unit": "µg"
      },
      {
        "label": "Vitamin C",
        "tag": "VITC",
        "schemaOrgTag": null,
        "total": 186.88005644000003,
        "hasRDI": true,
        "daily": 207.6445071555556,
        "unit": "mg"
      },
      {
        "label": "Thiamin (B1)",
        "tag": "THIA",
        "schemaOrgTag": null,
        "total": 0.44659032139999993,
        "hasRDI": true,
        "daily": 37.21586011666666,
        "unit": "mg"
      },
      {
        "label": "Riboflavin (B2)",
        "tag": "RIBF",
        "schemaOrgTag": null,
        "total": 1.8562291768999999,
        "hasRDI": true,
        "daily": 142.78685976153844,
        "unit": "mg"
      },
      {
        "label": "Niacin (B3)",
        "tag": "NIA",
        "schemaOrgTag": null,
        "total": 5.0977967494000005,
        "hasRDI": true,
        "daily": 31.861229683750004,
        "unit": "mg"
      },
      {
        "label": "Vitamin B6",
        "tag": "VITB6A",
        "schemaOrgTag": null,
        "total": 0.2324058636,
        "hasRDI": true,
        "daily": 17.877374123076923,
        "unit": "mg"
      },
      {
        "label": "Folate equivalent (total)",
        "tag": "FOLDFE",
        "schemaOrgTag": null,
        "total": 270.9107029,
        "hasRDI": true,
        "daily": 67.727675725,
        "unit": "µg"
      },
      {
        "label": "Folate (food)",
        "tag": "FOLFD",
        "schemaOrgTag": null,
        "total": 87.31070290000001,
        "hasRDI": false,
        "daily": 0,
        "unit": "µg"
      },
      {
        "label": "Folic acid",
        "tag": "FOLAC",
        "schemaOrgTag": null,
        "total": 108.8,
        "hasRDI": false,
        "daily": 0,
        "unit": "µg"
      },
      {
        "label": "Vitamin B12",
        "tag": "VITB12",
        "schemaOrgTag": null,
        "total": 0.204,
        "hasRDI": true,
        "daily": 8.5,
        "unit": "µg"
      },
      {
        "label": "Vitamin D",
        "tag": "VITD",
        "schemaOrgTag": null,
        "total": 0,
        "hasRDI": true,
        "daily": 0,
        "unit": "µg"
      },
      {
        "label": "Vitamin E",
        "tag": "TOCPHA",
        "schemaOrgTag": null,
        "total": 1.3154178730000001,
        "hasRDI": true,
        "daily": 8.769452486666667,
        "unit": "mg"
      },
      {
        "label": "Vitamin K",
        "tag": "VITK1",
        "schemaOrgTag": null,
        "total": 9.979032140000003,
        "hasRDI": true,
        "daily": 8.315860116666668,
        "unit": "µg"
      },
      {
        "label": "Sugar alcohols",
        "tag": "Sugar.alcohol",
        "schemaOrgTag": null,
        "total": 0,
        "hasRDI": false,
        "daily": 0,
        "unit": "g"
      },
      {
        "label": "Water",
        "tag": "WATER",
        "schemaOrgTag": null,
        "total": 520.9970552890001,
        "hasRDI": false,
        "daily": 0,
        "unit": "g"
      }
    ]
  };

  const MyModel = mongoose.model('Recipe', new Schema({ name: String }));


})();
