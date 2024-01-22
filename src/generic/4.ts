/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PageType {
  title: string;
}
class Component<T extends PageType> {
  constructor(public props: T) {}
}

class Page extends Component<PageType> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
