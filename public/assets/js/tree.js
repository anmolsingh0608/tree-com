let trees = [
  {
    name: "Balsam Fir",
    scientificName: "Abies balsamea",
    use: "Use Sparingly",
    form: "Pyramidal",
    flowerColor: "Catkin",
    flowerTime: "Summer",
    fruit: "Dark violet cone when young; turning gray-brown at maturity",
    fallColor: null,
    tolerances: "Can tolerate shade better than other fir species",
    growthRate: "Slow",
    size: "Large",
    nativeRegion: "Northern United States & Canada",
    notes:
      "Intolerant of pollution, dry air, and excessive heat; Beneficial for birds",
    imgs: [
      "https://image.shutterstock.com/image-photo/fresh-green-leaf-background-balsam-600w-1676782642.jpg",
      "https://image.shutterstock.com/image-photo/end-subalpine-fir-balsam-branch-600w-603402080.jpg",
      "https://image.shutterstock.com/image-photo/end-subalpine-fir-balsam-branch-600w-603402089.jpg",
    ],
  },
];

trees = trees.map((tree, i) => {
  return {
    ...tree,
  };
});

let formsFilterList = [
  ...new Set(trees.map((tree) => tree.form).filter((elem) => elem != null)),
];
let fruitFilterList = [
  ...new Set(trees.map((tree) => tree.fruit).filter((elem) => elem != null)),
];
let tolerateFilterList = [
  ...new Set(
    trees.map((tree) => tree.tolerances).filter((elem) => elem != null)
  ),
];
let growthRateFilterList = [
  ...new Set(
    trees.map((tree) => tree.growthRate).filter((elem) => elem != null)
  ),
];
let fallColorFilterList = [
  ...new Set(
    trees.map((tree) => tree.fallColor).filter((elem) => elem != null)
  ),
];
let regionFilterList = [
  ...new Set(
    trees.map((tree) => tree.nativeRegion).filter((elem) => elem != null)
  ),
];
let sizeFilterList = [
  ...new Set(trees.map((tree) => tree.size).filter((elem) => elem != null)),
];

let flowerColorFilterList = [
  ...new Set(
    trees.map((tree) => tree.flowerColor).filter((elem) => elem != null)
  ),
];

let flowerTimeFilterList = [
  ...new Set(
    trees.map((tree) => tree.flowerTime).filter((elem) => elem != null)
  ),
];

const filters = {
  form: [],
  fruit: [],
  tolerances: [],
  growthRate: [],
  fallColor: [],
  region: [],
  size: [],
  flowerColor: [],
  flowerTime: [],
};

function resetFilters() {
  filters = {
    form: [],
    fruit: [],
    tolerances: [],
    growthRate: [],
    fallColor: [],
    region: [],
    size: [],
    flowerColor: [],
    flowerTime: [],
  };
}

function initTrees() {
  initFilters();
  initListeners();
  drawTrees(trees);
  // initApp();
}

function resetFilters() {
  filters.form = [];
  filters.fruit = [];
  filters.tolerances = [];
  filters.growthRate = [];
  filters.fallColor = [];
  filters.region = [];
  filters.size = [];
  filters.flowerColor = [];
  filters.flowerTime = [];
  drawTrees(trees);
  initFilters();
  initFilterListeners();
}

function drawTrees(trees) {
  $(".tree-list-container .tree-wrap").remove();
  trees.forEach((tree) => {
    $(".tree-list-container").append(`
              <div class="tree-wrap">
                  <a href="/#/main/detail?index=${tree.id}" class="box">
                      <div class="img"><img src="${
                        tree.imgs && tree.imgs.length
                          ? tree.imgs[0]
                          : gnerateRandomImage()
                      }"
                      }" alt="${tree.name}" /></div>
                      <span class="name">${tree.scientificName}</span>
                  </a>
              </div>
          `);
  });
  domSelectors();
}

function initListeners() {
  $(".searchbar input").on("keyup", function () {
    let search = $(this).val();
    let filteredTrees = trees.filter((tree) => {
      return (
        (tree.scientificName &&
          tree.scientificName.toLowerCase().includes(search.toLowerCase())) ||
        (tree.name && tree.name.toLowerCase().includes(search.toLowerCase())) ||
        (tree.use && tree.use.toLowerCase().includes(search.toLowerCase())) ||
        (tree.form &&
          tree.form.join(" ").toLowerCase().includes(search.toLowerCase())) ||
        (tree.fruit &&
          tree.fruit.join(" ").toLowerCase().includes(search.toLowerCase())) ||
        (tree.tolerances &&
          tree.tolerances
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (tree.growthRate &&
          tree.growthRate
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (tree.fallColor &&
          tree.fallColor
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (tree.nativeRegion &&
          tree.nativeRegion
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (tree.size &&
          tree.size.join(" ").toLowerCase().includes(search.toLowerCase())) ||
        (tree.flowerColor &&
          tree.flowerColor
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (tree.flowerTime &&
          tree.flowerTime
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase()))
      );
    });
    drawTrees(filteredTrees);
  });
  $(".clear-filter").on("click", function () {
    resetFilters();
    closeFilter();
  });
  $(".update-filter").on("click", function () {
    updateFilters();
  });
  initFilterListeners();
}
function initFilterListeners() {
  $('.filter[data-tree="form"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.form.indexOf(text);
    if (existingIndex > -1) {
      filters.form.splice(existingIndex, 1);
      return;
    }
    filters.form.push(text);
  });
  $('.filter[data-tree="fruit"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.fruit.indexOf(text);
    if (existingIndex > -1) {
      filters.fruit.splice(existingIndex, 1);
      return;
    }
    filters.fruit.push(text);
  });
  $('.filter[data-tree="tolerate"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.tolerances.indexOf(text);
    if (existingIndex > -1) {
      filters.tolerances.splice(existingIndex, 1);
      return;
    }
    filters.tolerances.push(text);
  });
  $('.filter[data-tree="growthRate"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.growthRate.indexOf(text);
    if (existingIndex > -1) {
      filters.growthRate.splice(existingIndex, 1);
      return;
    }
    filters.growthRate.push(text);
  });
  $('.filter[data-tree="fallColor"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.fallColor.indexOf(text);
    if (existingIndex > -1) {
      filters.fallColor.splice(existingIndex, 1);
      return;
    }
    filters.fallColor.push(text);
  });

  $('.filter[data-tree="region"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.region.indexOf(text);
    if (existingIndex > -1) {
      filters.region.splice(existingIndex, 1);
      return;
    }
    filters.region.push(text);
  });
  $('.filter[data-tree="size"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.size.indexOf(text);
    if (existingIndex > -1) {
      filters.size.splice(existingIndex, 1);
      return;
    }
    filters.size.push(text);
  });
  $('.filter[data-tree="flowerColor"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.flowerColor.indexOf(text);
    if (existingIndex > -1) {
      filters.flowerColor.splice(existingIndex, 1);
      return;
    }
    filters.flowerColor.push(text);
  });
  $('.filter[data-tree="flowerTime"] ul.nav li').on("click", function () {
    const text = $(this).text();
    const existingIndex = filters.flowerTime.indexOf(text);
    if (existingIndex > -1) {
      filters.flowerTime.splice(existingIndex, 1);
      return;
    }
    filters.flowerTime.push(text);
  });
}
function initFilters() {
  $('.filter[data-tree="form"] ul.nav li').remove();
  $('.filter[data-tree="form"] ul.nav').append(
    formsFilterList.map((form) => `<li><a >${form}</a></li>`).join("")
  );
  $('.filter[data-tree="fruit"] ul.nav li').remove();
  $('.filter[data-tree="fruit"] ul.nav').append(
    fruitFilterList.map((fruit) => `<li><a >${fruit}</a></li>`).join("")
  );
  $('.filter[data-tree="tolerate"] ul.nav li').remove();
  $('.filter[data-tree="tolerate"] ul.nav').append(
    tolerateFilterList
      .map((tolerate) => `<li><a >${tolerate}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="growthRate"] ul.nav li').remove();
  $('.filter[data-tree="growthRate"] ul.nav').append(
    growthRateFilterList
      .map((growthRate) => `<li><a >${growthRate}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="fallColor"] ul.nav li').remove();
  $('.filter[data-tree="fallColor"] ul.nav').append(
    fallColorFilterList
      .map((fallColor) => `<li><a >${fallColor}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="region"] ul.nav li').remove();
  $('.filter[data-tree="region"] ul.nav').append(
    regionFilterList
      .map((nativeRegion) => `<li><a >${nativeRegion}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="size"] ul.nav li').remove();
  $('.filter[data-tree="size"] ul.nav').append(
    sizeFilterList.map((size) => `<li><a >${size}</a></li>`).join("")
  );
  $('.filter[data-tree="flowerColor"] ul.nav li').remove();
  $('.filter[data-tree="flowerColor"] ul.nav').append(
    flowerColorFilterList
      .map((flowerColor) => `<li><a >${flowerColor}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="flowerTime"] ul.nav li').remove();
  $('.filter[data-tree="flowerTime"] ul.nav').append(
    flowerTimeFilterList
      .map((flowerTime) => `<li><a >${flowerTime}</a></li>`)
      .join("")
  );
}

function updateFilters() {
  let filteredTrees = JSON.parse(JSON.stringify(trees));
  if (filters.form.length > 0) {
    filters.form.forEach((val) => {
      filteredTrees = filteredTrees.filter((tree) => tree.form.includes(val));
    });
  }
  if (filters.fruit.length > 0) {
    filters.fruit.forEach((val) => {
      filteredTrees = filteredTrees.filter((tree) => tree.fruit.includes(val));
    });
  }
  if (filters.tolerances.length > 0) {
    filters.tolerances.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.tolerances.includes(val)
        ))
    );
  }
  if (filters.growthRate.length > 0) {
    filters.growthRate.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.growthRate.includes(val)
        ))
    );
  }
  if (filters.fallColor.length > 0) {
    filters.fallColor.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.fallColor.includes(val)
        ))
    );
  }

  if (filters.region.length > 0) {
    filters.region.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.nativeRegion.includes(val)
        ))
    );
  }
  if (filters.size.length > 0) {
    filters.size.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.size.includes(val)
        ))
    );
  }
  if (filters.flowerColor.length > 0) {
    filters.flowerColor.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.flowerColor.includes(val)
        ))
    );
  }
  if (filters.flowerTime.length > 0) {
    filters.flowerTime.forEach(
      (val) =>
        (filteredTrees = filteredTrees.filter((tree) =>
          tree.flowerTime.includes(val)
        ))
    );
  }

  drawTrees(filteredTrees);
}

function setTrees(rawTrees) {
  trees = rawTrees;
  trees = trees.map((tree) => {
    return {
      imgs: tree.images.map((img) => img.path),
      ...tree,
      form: tree.form ? tree.form : [],
      fruit: tree.fruit ? tree.fruit : [],
      tolerances: tree.tolerances ? tree.tolerances : [],
      growthRate: tree.growthRate ? tree.growthRate : [],
      fallColor: tree.fallColor ? tree.fallColor : [],
      nativeRegion: tree.nativeRegion ? tree.nativeRegion : [],
      size: tree.size ? tree.size : [],
      flowerColor: tree.flowerColor ? tree.flowerColor : [],
      flowerTime: tree.flowerTime ? tree.flowerTime : [],
    };
  });
  trees = trees.sort((a, b) => {
    return a.scientificName.localeCompare(b.scientificName);
  });
  formsFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.form)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
  fruitFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.fruit)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
  tolerateFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.tolerances)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
  growthRateFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.growthRate)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
  fallColorFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.fallColor)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
  regionFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.nativeRegion)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
  sizeFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.size)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];

  flowerColorFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.flowerColor)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];

  flowerTimeFilterList = [
    ...new Set(
      trees
        .map((tree) => tree.flowerTime)
        .filter((elem) => elem != null)
        .flat(1)
    ),
  ];
}

function gnerateRandomImage() {
  const images = [
    `https://image.shutterstock.com/image-photo/tree-isolated-600w-562231306.jpg`,
    `https://image.shutterstock.com/image-photo/tree-isolated-cutting-on-white-600w-1549521998.jpg`,
    `https://image.shutterstock.com/image-illustration/3d-illustration-tree-falling-leaves-600w-2084419762.jpg`,
    `https://image.shutterstock.com/image-illustration/fir-tree-isolated-3d-illustration-600w-723205552.jpg`,
    `https://image.shutterstock.com/image-photo/isolated-mango-tree-on-white-600w-490049974.jpg`,
  ];
  let randomImage = Math.floor(Math.random() * images.length);
  return images[randomImage];
}

function isTreeExistInArray(trees, tree) {
  return trees.some((t) => t.id === tree.id);
}
