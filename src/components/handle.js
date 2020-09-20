export class Handle {
  constructor(slider, position, index, setValue) {
    this.slider = slider;
    this.position = position;
    this.index = index;
    this.value = 0;
    this.setValue = setValue;
    this.init();
  }

  init() {
    this.handle = document.createElement("div");
    this.handle.classList.add("handle");

    this.handle.style.left =
      (this.position - this.slider.range.min) * this.slider.pixelsPerUnit +
      "px";

    this.slider.container.appendChild(this.handle);
    let val = 0;
    if (this.slider.displayValue) {
      this.valueContainer = document.createElement("div");
      this.valueContainer.classList.add("value");
      val = this.position - this.slider.range.min;
      this.valueContainer.innerHTML = this.position;
      this.handle.appendChild(this.valueContainer);
    }
    this.handle.addEventListener("mousedown", (e) => this.onMouseDown(e));

    this.minLimit = 0;
    this.maxLimit = this.slider.width;
  }

  onMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    document.onmousemove = (e) => this.onMouseMove(e);
    document.onmouseup = (e) => this.onMouseUp(e);

    // find left side handle and set minimum limit
    if (this.index > 0) {
      this.minLimit = parseInt(
        this.slider.handleDOMs[this.index - 1].handle.style.left
      );
    } else {
      this.minLimit = 0;
    }

    // find right side handle and set maximum limit
    if (this.index < this.slider.handleDOMs.length - 1) {
      this.maxLimit = parseInt(
        this.slider.handleDOMs[this.index + 1].handle.style.left
      );
    } else {
      this.maxLimit = this.slider.width;
    }
  }

  onMouseMove(e) {
    e = e || window.event;
    e.preventDefault();

    this.moveHandle(e);
  }

  moveHandle(e) {
    let currentPos = parseInt(this.handle.style.left);

    if (currentPos < this.minLimit) {
      this.handle.style.left = this.minLimit + "px";
    } else if (currentPos > this.maxLimit) {
      this.handle.style.left = this.maxLimit + "px";
    } else {
      this.handle.style.left = e.movementX + currentPos + "px";
    }

    if (this.slider.displayValue) {
      let value = parseInt(this.handle.style.left) / this.slider.pixelsPerUnit;

      if (value < 0) {
        value = 2016;
      }

      if (value > this.slider.range.max) {
        value = this.slider.range.max;
      }
      value += 2016;
      this.value = value;
      this.valueContainer.innerHTML = parseInt(value);
    }
  }

  onMouseUp(e) {
    this.moveHandle(e);
    this.setValue(this.value);
    document.onmousemove = null;
    document.onmouseup = null;
  }

  giveValue() {
    return this.value;
  }
  //   render() {
  //     return null;
  // }
}
