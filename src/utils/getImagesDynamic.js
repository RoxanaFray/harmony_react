export default function getImagesDynamic() {
    let images = {};
    // idk why, but passing path as a function param doesn't work
    let requireContext = require.context('../images/plans/apartments_plans', false, /\.(png|jpe?g|svg)$/);
    requireContext.keys().map((item, index) => { images[item.replace('./', '')] = requireContext(item); });
    return images;
}