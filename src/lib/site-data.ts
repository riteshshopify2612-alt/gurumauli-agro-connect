import fertilizer from "@/assets/product-fertilizer.jpg";
import seeds from "@/assets/product-seeds.jpg";
import organic from "@/assets/product-organic.jpg";
import khapliAsset from "@/assets/khapli-wheat.asset.json";
import sonaMotiAsset from "@/assets/sona-moti-wheat.asset.json";
import bajraAsset from "@/assets/bajra.asset.json";
import jowarAsset from "@/assets/jowar.asset.json";

export type Product = {
  slug: string;
  title: string;
  mr: string;
  desc: string;
  image: string;
  longDesc?: string;
  benefits?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "khapli-emmer-wheat",
    title: "Khapli (Emmer) Wheat",
    mr: "खपली गहू",
    desc: "Ancient grain wheat — diabetic friendly, low glycemic index, low gluten.",
    image: khapliAsset.url,
    longDesc:
      "Samtol Jeevan Khapli (Emmer) Wheat is a traditional ancient grain known for its high nutrition and digestibility. Ideal for diabetic-friendly diets with low glycemic index and low gluten content.",
    benefits: ["Diabetic Friendly", "Ancient Grain", "Low Glycemic Index", "Low Gluten", "Controls Obesity"],
  },
  {
    slug: "sona-moti-wheat",
    title: "Sona Moti Wheat",
    mr: "सोना मोती गहू",
    desc: "Premium heritage wheat — diabetic friendly, low gluten, controls obesity.",
    image: sonaMotiAsset.url,
    longDesc:
      "Samtol Jeevan Sona Moti Wheat is a rare heritage variety packed with nutrients and natural goodness — perfect for healthy chapatis and daily meals.",
    benefits: ["Diabetic Friendly", "Non-GMO", "Low Glutene", "Control Obesity", "Low Glycemic Index"],
  },
  {
    slug: "bajra",
    title: "Bajra",
    mr: "बाजरी",
    desc: "Pearl millet — zero preservatives, high in fiber, low glycemic index.",
    image: bajraAsset.url,
    longDesc:
      "Samtol Jeevan Bajra (Pearl Millet) is a natural, fibre-rich grain great for winter rotis and balanced nutrition.",
    benefits: ["Zero Preservative", "Zero Pesticides", "High in Fiber", "Low Glycemic Index", "Non-GMO"],
  },
  {
    slug: "jowar",
    title: "Jowar",
    mr: "ज्वारी",
    desc: "Sorghum — zero pesticides, high fiber, naturally gluten-free.",
    image: jowarAsset.url,
    longDesc:
      "Samtol Jeevan Jowar (Sorghum) is a wholesome, gluten-free grain — ideal for bhakri, healthy snacks and daily wellness.",
    benefits: ["Zero Preservative", "Zero Pesticides", "High in Fiber", "Low Glycemic Index", "Non-GMO"],
  },
  {
    slug: "fertilizers",
    title: "Fertilizers",
    mr: "खते",
    desc: "High-quality NPK, urea and specialty fertilizers for healthy crop growth.",
    image: fertilizer,
  },
  {
    slug: "seeds",
    title: "Seeds",
    mr: "बियाणे",
    desc: "Certified seeds of cotton, soybean, wheat, jowar and vegetables.",
    image: seeds,
  },
  {
    slug: "organic-products",
    title: "Organic Products",
    mr: "सेंद्रिय उत्पादने",
    desc: "Vermicompost, bio-fertilizers and natural soil enhancers.",
    image: organic,
  },
  {
    slug: "crop-nutrition",
    title: "Crop Nutrition",
    mr: "पीक पोषण",
    desc: "Micronutrients and growth boosters tailored for every crop stage.",
    image: fertilizer,
  },
  {
    slug: "pesticides",
    title: "Pesticides",
    mr: "कीटकनाशके",
    desc: "Safe and effective crop protection solutions for all major pests.",
    image: organic,
  },
  {
    slug: "agriculture-solutions",
    title: "Agriculture Solutions",
    mr: "कृषी सल्ला",
    desc: "Expert guidance on crop selection, soil health and yield improvement.",
    image: seeds,
  },
];

export const PHONE_PRIMARY = "9322056833";
export const PHONE_SECONDARY = "9322056833";
export const WHATSAPP_NUMBER = "919322056833";
export const WHATSAPP_URL = "https://wa.me/919322056833?text=Hello%20Gurumauli%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

export const whatsappOrderUrl = (productTitle: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Gurumauli Agro, I would like to order: ${productTitle}. Please share price and availability.`
  )}`;
