export default class StyleUtils {
  static calcFontSize(fontSize: string | number) {
    return `${
      (typeof fontSize === "string" ? Number(fontSize) : fontSize) / 10
    }rem`;
  }
}
