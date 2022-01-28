import { Component, Fragment } from "react";

class AnimatedItems extends Component {
  componentDidMount() {
    this.initialPositions = this.getElementPositions();
  }

  componentDidUpdate(prevProps) {
    let newChild = null;
    let newPositions;

    // Check if new item has been added
    if (prevProps.children.length !== this.props.children.length) {
      newChild = this.returnNewChild(prevProps);
      newPositions = this.getElementPositions(newChild);
    } else {
      newPositions = this.getElementPositions();
    }
    if (newPositions) {
      Object.keys(newPositions).forEach((key) => {
        if (!key) return;
        const newData = newPositions[key];
        let prevData;
        let deltaX;
        let deltaY;

        if (newData.isNewElement) {
          deltaX = 0;
          deltaY = -newData?.clientRect.height / 4;
        } else {
          prevData = this.initialPositions[key];
          if (prevData) {
            deltaX = prevData.clientRect.left - newData?.clientRect.left;
            deltaY = prevData.clientRect.top - newData?.clientRect.top;
          }
        }

        requestAnimationFrame(() => {
          const child = this.container?.children[newData.index];
          if (child) {
            child.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
            child.style.transition = "all 0s";
            if (newData.isNewElement) {
              child.style.opacity = "0";
            }

            requestAnimationFrame(() => {
              child.style.transition = "all 0.5s";
              child.style.transform = "translate3d(0, 0, 0)";
              if (newData.isNewElement) {
                child.style.opacity = "1";
              }
            });
          }
        });
      });
      this.initialPositions = newPositions;
    }
  }

  render() {
    return (
      <div
        ref={(el) => (this.container = el)}
        className=" md:grid-cols-2 gap-10 inline-grid "
      >
        {this.props.children}
      </div>
    );
  }

  // find new child that was added to the dom by diff against initial values on mount
  returnNewChild = (prevProps) => {
    return this.props.children.filter((item) => {
      const isMatch = prevProps.children.some((prevItem) => {
        return item?.key === prevItem?.key;
      });
      if (!isMatch) {
        return item;
      }
    });
  };

  getElementPositions = (newChild = null) => {
    const { children } = this.props;
    const data = Array.from(this.container.children).reduce(
      (obj, el, index) => {
        obj[children[index].key] = {
          index,
          clientRect: el.getBoundingClientRect(),
          isNewElement: newChild
            ? newChild[0]?.key === children[index]?.key
            : false,
        };
        return obj;
      },
      {}
    );
    return data;
  };
}
const data = [
  {
    id: 0,
    text: "First Item",
    title: "ab",
    img: "https://megaone.acrothemes.com/digital-agency/img/work1.jpg",
    type: "Logo Design",
  },
  {
    id: 1,
    text: "First Item",
    title: "ab",
    img: "https://megaone.acrothemes.com/digital-agency/img/work3.jpg",
    type: "Logo Design",
  },
  {
    id: 2,
    text: "First Item",
    title: "ab",
    img: "https://megaone.acrothemes.com/digital-agency/img/work2.jpg",
    type: "Web Design",
  },
  {
    id: 3,
    text: "First Item",
    title: "ab",
    img: "https://megaone.acrothemes.com/digital-agency/img/work4.jpg",
    type: "Mobile App",
  },
];
export default class App extends Component {
  state = {
    items: data,
    tags: [
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Web Design",
      },
      {
        id: 2,
        name: "Logo Design",
      },
      {
        id: 3,
        name: "Mobile App",
      },
    ],
    active: 0,
  };

  reverseItems = () => {
    this.setState({
      items: this.state.items.reverse(),
    });
  };

  shuffle = () => {
    const shuffledItems = this.shuffleArray();
    this.setState({
      items: shuffledItems,
    });
  };

  insert = () => {
    const currentLength = this.state.items.length;
    const newItem = {
      id: currentLength,
      text: `New Item ${currentLength + 1}`,
    };
    this.setState((prevState) => ({
      items: [newItem, ...prevState.items],
    }));
  };

  shuffleArray = () => {
    let array = this.state.items;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleFilter(e) {
    this.setState({ active: e?.id });
    const payload = data?.filter((v) => v?.type === e?.name);
    if (e?.name !== "All")
      return this.setState((prevState) => ({
        items: [...payload],
      }));
    return this.setState({
      items: data,
    });
  }
  render() {
    const { items } = this.state;
    return (
      <Fragment>
        <div
          id="blog"
          className="mx-auto max-w-6xl px-7 pb-20 overflow-hidden pt-20"
        >
          <div className="md:w-1/2 relative z-50 text-black-100 font-bold -mb-48">
            <h1 className="overflow-hidden text-5xl leading-snug">
              OUR
              <br /> AMAZING PORTFOLIO
            </h1>
            <div className="w-full md:mb-8 mb-56 mt-10 flex-col md:flex-row flex md:space-y-0 space-y-5 md:space-x-5 md:items-center">
              {this.state.tags?.map((v, k) => {
                return (
                  <span
                    className={`text-sm hover:border-b-2 h-[30px] cursor-pointer transition-all hover:text-secondary border-secondary uppercase tracking-wider font-medium text-black-100 ${
                      this.state?.active === v.id
                        ? "border-b-2 border-secondary text-secondary"
                        : ""
                    }`}
                    key={k}
                    onClick={this.handleFilter.bind(this, v)}
                  >
                    {v?.name}
                  </span>
                );
              })}
            </div>
          </div>
          <AnimatedItems>
            {items.map((item, k) => (
              <div
                className={`w-full h-full flex flex-wrap ${
                  k === 0 ? "md:mt-48" : k === 3 ? "" : ""
                } `}
              >
                <div key={k} className={`md:h-[450px] w-full`}>
                  <img src={item?.img} className="w-full h-full" alt="" />
                </div>
                {k === 3 ? (
                  <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col mt-3">
                      <p className="text-black-100 my-3 text-opacity-50 font-light capitalize tracking-widest text-sm">
                        We've Completed More Then
                      </p>
                      <h1 className="text-black-100 text-6xl font-semibold">
                        530
                      </h1>
                      <p className="text-black-100 my-4 text-opacity-50 font-light capitalize tracking-widest text-sm">
                        Projects for Our amazing Clients
                      </p>
                    </div>
                    <button className="bg-primary px-10 py-3 text-white rounded-full text-sm">
                      VIEW ALL
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </AnimatedItems>
        </div>
      </Fragment>
    );
  }
}
