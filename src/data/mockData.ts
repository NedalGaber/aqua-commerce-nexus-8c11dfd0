
// Mock data for the e-commerce app
import { Product, Category, Order, User, Vendor, Warehouse, ReturnRequest, InventoryItem, SalesData } from "@/types";

// Categories with hierarchy
export const categories: Category[] = [
  {
    id: "cat1",
    name: "Computers & Tablets",
    slug: "computers-tablets",
    image: "/placeholder.svg",
    subcategories: [
      {
        id: "cat1-1",
        name: "Laptops",
        slug: "laptops",
        parentId: "cat1",
        subcategories: [
          {
            id: "cat1-1-1",
            name: "Gaming Laptops",
            slug: "gaming-laptops",
            parentId: "cat1-1",
          },
          {
            id: "cat1-1-2",
            name: "Business Laptops",
            slug: "business-laptops",
            parentId: "cat1-1",
          },
          {
            id: "cat1-1-3",
            name: "2-in-1 Laptops",
            slug: "2-in-1-laptops",
            parentId: "cat1-1",
          }
        ]
      },
      {
        id: "cat1-2",
        name: "Desktops",
        slug: "desktops",
        parentId: "cat1",
        subcategories: [
          {
            id: "cat1-2-1",
            name: "Gaming Desktops",
            slug: "gaming-desktops",
            parentId: "cat1-2",
          },
          {
            id: "cat1-2-2",
            name: "All-in-One Desktops",
            slug: "all-in-one-desktops",
            parentId: "cat1-2",
          }
        ]
      },
      {
        id: "cat1-3",
        name: "Tablets",
        slug: "tablets",
        parentId: "cat1",
      }
    ]
  },
  {
    id: "cat2",
    name: "TV & Home Theater",
    slug: "tv-home-theater",
    image: "/placeholder.svg",
    subcategories: [
      {
        id: "cat2-1",
        name: "TVs",
        slug: "tvs",
        parentId: "cat2",
        subcategories: [
          {
            id: "cat2-1-1",
            name: "OLED TVs",
            slug: "oled-tvs",
            parentId: "cat2-1",
          },
          {
            id: "cat2-1-2",
            name: "QLED TVs",
            slug: "qled-tvs",
            parentId: "cat2-1",
          }
        ]
      },
      {
        id: "cat2-2",
        name: "Sound Systems",
        slug: "sound-systems",
        parentId: "cat2",
      }
    ]
  },
  {
    id: "cat3",
    name: "Cell Phones",
    slug: "cell-phones",
    image: "/placeholder.svg",
    subcategories: [
      {
        id: "cat3-1",
        name: "Smartphones",
        slug: "smartphones",
        parentId: "cat3",
      },
      {
        id: "cat3-2",
        name: "Phone Cases",
        slug: "phone-cases",
        parentId: "cat3",
      }
    ]
  },
  {
    id: "cat4",
    name: "Audio",
    slug: "audio",
    image: "/placeholder.svg",
    subcategories: [
      {
        id: "cat4-1",
        name: "Headphones",
        slug: "headphones",
        parentId: "cat4",
      },
      {
        id: "cat4-2",
        name: "Speakers",
        slug: "speakers",
        parentId: "cat4",
      }
    ]
  },
  {
    id: "cat5",
    name: "Video Games",
    slug: "video-games",
    image: "/placeholder.svg",
    subcategories: [
      {
        id: "cat5-1",
        name: "Consoles",
        slug: "consoles",
        parentId: "cat5",
      },
      {
        id: "cat5-2",
        name: "Games",
        slug: "games",
        parentId: "cat5",
      }
    ]
  },
  {
    id: "cat6",
    name: "Smart Home",
    slug: "smart-home",
    image: "/placeholder.svg",
  },
  {
    id: "cat7",
    name: "Cameras",
    slug: "cameras",
    image: "/placeholder.svg",
  },
  {
    id: "cat8",
    name: "Wearable Technology",
    slug: "wearable-tech",
    image: "/placeholder.svg",
  }
];

// Products
export const products: Product[] = [
  {
    id: "p1",
    name: "Samsung 85\" Class QLED 4K Smart TV",
    description: "Experience breathtaking 4K resolution with this Samsung QLED TV featuring Quantum HDR that delivers an expanded range of color and contrast.",
    price: 2299.99,
    originalPrice: 2999.99,
    discount: 700,
    images: ["/lovable-uploads/e14e8b73-690c-440a-802e-4a759705f161.png"],
    category: "TV & Home Theater",
    subCategory: "TVs",
    brand: "Samsung",
    inStock: true,
    stockQuantity: 35,
    rating: 4.7,
    specifications: {
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Model Year": "2023",
      "Screen Size": "85 inches",
      "Connectivity": "Wi-Fi, Bluetooth, HDMI, USB",
      "Features": "Quantum HDR, Smart TV, Voice Assistant"
    },
    featured: true,
    bestSeller: true,
    sku: "SAM-TV-QLD-85",
    createdAt: "2023-01-01T10:30:00Z",
    updatedAt: "2023-01-15T08:45:00Z"
  },
  {
    id: "p2",
    name: "Lenovo Yoga 7i 2-in-1 16\" Touch-Screen Laptop",
    description: "Versatile 2-in-1 laptop with powerful Intel Core processor and touchscreen display for enhanced productivity.",
    price: 879.99,
    originalPrice: 1179.99,
    discount: 300,
    images: ["/lovable-uploads/e14e8b73-690c-440a-802e-4a759705f161.png"],
    category: "Computers & Tablets",
    subCategory: "Laptops",
    brand: "Lenovo",
    inStock: true,
    stockQuantity: 42,
    rating: 4.5,
    specifications: {
      "Processor": "Intel Core i7-1255U",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Screen Size": "16 inches",
      "Resolution": "2560 x 1600",
      "Operating System": "Windows 11 Home"
    },
    featured: true,
    newArrival: true,
    sku: "LEN-YOGA-7I-16",
    createdAt: "2023-02-10T14:20:00Z",
    updatedAt: "2023-02-28T11:15:00Z"
  },
  {
    id: "p3",
    name: "Apple iPhone 13 Pro Max",
    description: "Apple's flagship smartphone with A15 Bionic chip, ProMotion display, and advanced camera system.",
    price: 1099.99,
    images: ["/placeholder.svg"],
    category: "Cell Phones",
    subCategory: "Smartphones",
    brand: "Apple",
    inStock: true,
    stockQuantity: 78,
    rating: 4.8,
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A15 Bionic",
      "Storage": "128GB",
      "Camera": "12MP Triple camera system",
      "Battery": "Up to 28 hours video playback",
      "Water Resistance": "IP68"
    },
    bestSeller: true,
    sku: "APL-IPH-13PM-128",
    createdAt: "2023-03-05T09:10:00Z",
    updatedAt: "2023-03-20T16:30:00Z"
  },
  {
    id: "p4",
    name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
    description: "Industry-leading noise cancellation with premium sound quality and long battery life.",
    price: 349.99,
    originalPrice: 399.99,
    discount: 50,
    images: ["/placeholder.svg"],
    category: "Audio",
    subCategory: "Headphones",
    brand: "Sony",
    inStock: true,
    stockQuantity: 56,
    rating: 4.9,
    specifications: {
      "Type": "Over-ear",
      "Connectivity": "Bluetooth 5.0, 3.5mm",
      "Battery Life": "Up to 30 hours",
      "Noise Cancellation": "Active",
      "Features": "Touch controls, Speak-to-chat, 360 Reality Audio"
    },
    featured: true,
    bestSeller: true,
    sku: "SNY-WH-1000XM4",
    createdAt: "2023-01-20T11:45:00Z",
    updatedAt: "2023-02-05T13:20:00Z"
  },
  {
    id: "p5",
    name: "Fitbit Sense Advanced Smartwatch",
    description: "Advanced health smartwatch with EDA stress sensor, ECG app, and built-in GPS.",
    price: 199.99,
    originalPrice: 299.99,
    discount: 100,
    images: ["/placeholder.svg"],
    category: "Wearable Technology",
    brand: "Fitbit",
    inStock: true,
    stockQuantity: 32,
    rating: 4.4,
    specifications: {
      "Display": "1.58-inch AMOLED",
      "Battery Life": "6+ days",
      "Water Resistance": "50m",
      "Sensors": "Heart rate, EDA, ECG, Skin temperature",
      "Features": "GPS, Sleep tracking, Voice assistant"
    },
    featured: false,
    sku: "FIT-SNS-ADV",
    createdAt: "2023-04-10T08:30:00Z",
    updatedAt: "2023-04-25T10:15:00Z"
  }
];

// Featured deals for homepage
export const featuredDeals = [
  {
    id: "deal1",
    title: "Save $700",
    subtitle: "Samsung 85\" class QLED 4K smart TV",
    image: "/lovable-uploads/e14e8b73-690c-440a-802e-4a759705f161.png", 
    price: "$2,299.99",
    originalPrice: "$2,999.99",
    productId: "p1",
    badgeText: "$700 off"
  },
  {
    id: "deal2",
    title: "Save $300",
    subtitle: "Lenovo Yoga 7i 2-in-1 16\" touch-screen laptop",
    image: "/lovable-uploads/e14e8b73-690c-440a-802e-4a759705f161.png",
    price: "$879.99",
    originalPrice: "$1,179.99",
    productId: "p2",
    badgeText: "$300 off"
  },
  {
    id: "deal3",
    title: "Save up to 50%",
    subtitle: "Select KitchenAid 5.5-qt. stand mixers",
    image: "/placeholder.svg",
    price: "$299.99",
    originalPrice: "$449.99",
    productId: "p5",
    badgeText: "$150 off"
  },
  {
    id: "deal4",
    title: "Save up to 50%",
    subtitle: "on select Amazon products",
    image: "/placeholder.svg",
    productId: "p4",
    badgeText: "Up to 50% off"
  }
];

// Mock users 
export const users: User[] = [
  {
    id: "u1",
    email: "admin@aquacommerce.com",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    permissions: ["all"],
    phone: "555-123-4567",
    createdAt: "2022-12-01T00:00:00Z"
  },
  {
    id: "u2",
    email: "warehouse@aquacommerce.com",
    firstName: "Warehouse",
    lastName: "Manager",
    role: "warehouse",
    permissions: ["inventory_read", "inventory_write", "products_read"],
    phone: "555-234-5678",
    createdAt: "2023-01-15T00:00:00Z"
  },
  {
    id: "u3",
    email: "delivery@aquacommerce.com",
    firstName: "Delivery",
    lastName: "Driver",
    role: "delivery",
    permissions: ["orders_read", "delivery_write"],
    phone: "555-345-6789",
    createdAt: "2023-02-20T00:00:00Z"
  },
  {
    id: "u4",
    email: "customer@example.com",
    firstName: "John",
    lastName: "Doe",
    role: "customer",
    addresses: [
      {
        id: "addr1",
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "90210",
        country: "USA",
        isDefault: true
      }
    ],
    phone: "555-456-7890",
    createdAt: "2023-01-05T00:00:00Z"
  }
];

// Mock orders
export const orders: Order[] = [
  {
    id: "o1",
    userId: "u4",
    items: [
      {
        productId: "p1",
        productName: "Samsung 85\" Class QLED 4K Smart TV",
        quantity: 1,
        price: 2299.99,
        image: "/lovable-uploads/e14e8b73-690c-440a-802e-4a759705f161.png"
      },
      {
        productId: "p4",
        productName: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
        quantity: 1,
        price: 349.99,
        image: "/placeholder.svg"
      }
    ],
    totalAmount: 2649.98,
    shippingAddress: {
      id: "addr1",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "90210",
      country: "USA"
    },
    status: "shipped",
    paymentMethod: "credit_card",
    paymentStatus: "completed",
    shippingMethod: "standard",
    shippingCost: 0,
    tax: 220,
    createdAt: "2023-06-15T14:30:00Z",
    updatedAt: "2023-06-16T10:45:00Z",
    trackingNumber: "AQC123456789",
    estimatedDelivery: "2023-06-20T00:00:00Z"
  }
];

// Mock warehouses
export const warehouses: Warehouse[] = [
  {
    id: "w1",
    name: "Main Warehouse",
    address: {
      id: "waddr1",
      street: "500 Warehouse Blvd",
      city: "Industry City",
      state: "NV",
      zipCode: "89101",
      country: "USA"
    },
    capacity: 10000,
    currentOccupancy: 6500,
    managers: ["u2"]
  },
  {
    id: "w2",
    name: "East Coast Warehouse",
    address: {
      id: "waddr2",
      street: "123 Distribution Way",
      city: "Jersey City",
      state: "NJ",
      zipCode: "07302",
      country: "USA"
    },
    capacity: 8000,
    currentOccupancy: 4200,
    managers: ["u2"]
  }
];

// Mock vendors
export const vendors: Vendor[] = [
  {
    id: "v1",
    name: "Samsung Electronics",
    contactPerson: "Jane Smith",
    email: "jane.smith@samsung.example.com",
    phone: "555-987-6543",
    address: {
      id: "vaddr1",
      street: "85 Samsung Blvd",
      city: "Seoul",
      state: "",
      zipCode: "12345",
      country: "South Korea"
    },
    products: ["p1"],
    rating: 4.8,
    status: "active"
  },
  {
    id: "v2",
    name: "Lenovo Group",
    contactPerson: "Michael Chen",
    email: "m.chen@lenovo.example.com",
    phone: "555-876-5432",
    address: {
      id: "vaddr2",
      street: "1009 Think Place",
      city: "Morrisville",
      state: "NC",
      zipCode: "27560",
      country: "USA"
    },
    products: ["p2"],
    rating: 4.5,
    status: "active"
  }
];

// Mock return requests
export const returnRequests: ReturnRequest[] = [
  {
    id: "r1",
    orderId: "o1",
    userId: "u4",
    items: [
      {
        productId: "p4",
        productName: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
        quantity: 1,
        price: 349.99,
        image: "/placeholder.svg"
      }
    ],
    reason: "Defective product",
    status: "pending",
    createdAt: "2023-06-25T09:15:00Z",
    updatedAt: "2023-06-25T09:15:00Z"
  }
];

// Mock inventory data
export const inventoryItems: InventoryItem[] = [
  {
    productId: "p1",
    warehouseId: "w1",
    quantity: 20,
    location: "Section A, Row 5, Shelf 2",
    minimumStockLevel: 5,
    lastRestocked: "2023-05-15T10:30:00Z"
  },
  {
    productId: "p1",
    warehouseId: "w2",
    quantity: 15,
    location: "Section B, Row 3, Shelf 1",
    minimumStockLevel: 5,
    lastRestocked: "2023-06-01T14:45:00Z"
  },
  {
    productId: "p2",
    warehouseId: "w1",
    quantity: 25,
    location: "Section C, Row 2, Shelf 3",
    minimumStockLevel: 10,
    lastRestocked: "2023-05-20T11:15:00Z"
  },
  {
    productId: "p3",
    warehouseId: "w1",
    quantity: 40,
    location: "Section D, Row 1, Shelf 4",
    minimumStockLevel: 20,
    lastRestocked: "2023-06-05T09:30:00Z"
  },
  {
    productId: "p3",
    warehouseId: "w2",
    quantity: 38,
    location: "Section A, Row 4, Shelf 2",
    minimumStockLevel: 20,
    lastRestocked: "2023-06-10T13:20:00Z"
  },
  {
    productId: "p4",
    warehouseId: "w1",
    quantity: 30,
    location: "Section B, Row 6, Shelf 1",
    minimumStockLevel: 15,
    lastRestocked: "2023-05-25T15:45:00Z"
  },
  {
    productId: "p4",
    warehouseId: "w2",
    quantity: 26,
    location: "Section C, Row 5, Shelf 3",
    minimumStockLevel: 15,
    lastRestocked: "2023-06-08T10:10:00Z"
  },
  {
    productId: "p5",
    warehouseId: "w1",
    quantity: 18,
    location: "Section E, Row 2, Shelf 2",
    minimumStockLevel: 10,
    lastRestocked: "2023-06-12T14:30:00Z"
  },
  {
    productId: "p5",
    warehouseId: "w2",
    quantity: 14,
    location: "Section D, Row 3, Shelf 4",
    minimumStockLevel: 10,
    lastRestocked: "2023-06-15T11:05:00Z"
  }
];

// Mock sales data for charts
export const salesData: SalesData[] = [
  { date: "2023-01", revenue: 125000, profit: 43750, orders: 820, averageOrderValue: 152.44 },
  { date: "2023-02", revenue: 138000, profit: 51060, orders: 910, averageOrderValue: 151.65 },
  { date: "2023-03", revenue: 162000, profit: 58320, orders: 1050, averageOrderValue: 154.29 },
  { date: "2023-04", revenue: 147000, profit: 52920, orders: 980, averageOrderValue: 150.00 },
  { date: "2023-05", revenue: 171000, profit: 64980, orders: 1120, averageOrderValue: 152.68 },
  { date: "2023-06", revenue: 189000, profit: 69930, orders: 1210, averageOrderValue: 156.20 }
];

export const categoryList = [
  "Computers & Tablets",
  "TV & Home Theater",
  "Cell Phones",
  "Audio",
  "Video Games",
  "Smart Home",
  "Cameras",
  "Wearable Technology",
  "Appliances",
  "Car Electronics",
  "Office Supplies",
  "Movies & Music"
];
