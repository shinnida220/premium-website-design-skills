# Benchmark 03 — E-commerce storefront

## Scenario

Create a storefront for **Fieldnotes Supply**, a fictional brand selling durable everyday carry goods. The benchmark catalog contains three fictional products: Canvas Utility Tote ($38), Everyday Bottle ($26), and Pocket Notebook Set ($14). These prices are test data, not real offers.

## Audience and goal

- Audience: shoppers seeking practical, well-designed everyday products.
- Primary goal: add an item to cart and complete a demo checkout.
- Profile: Premium / Commercial with product-focused editorial imagery.

## Required routes and sections

- Collection page with product grid, sort control, and category/filter affordance.
- Product detail page with image gallery, price, description, quantity, and add-to-cart.
- Cart with quantity updates, remove action, subtotal, and empty state.
- Demo checkout with contact and shipping fields, order summary, validation, and explicit demo confirmation.

## Required interactions

- Product card navigation.
- Gallery selection.
- Quantity controls with minimum of one.
- Cart add/update/remove.
- Checkout validation and success state.
- Clear statement that no payment is processed.

## Content constraints

Use only the three supplied fictional products and prices. Do not invent reviews, ratings, stock scarcity, shipping promises, discounts, or payment provider trust badges. Product imagery may be original illustrations or clearly identified placeholders.

## Required viewports

360×800, 390×844, 768×1024, 1366×768, 1440×900.

## Evaluation focus

Product discovery; image consistency; price and variant clarity; cart feedback; checkout friction; mobile touch targets; data consistency between product, cart, and checkout.

## Acceptance criteria

- Cart totals remain correct after quantity changes and removals.
- Checkout summary matches cart contents.
- No payment is taken and demo status is unmistakable.
- Empty, error, and success states are designed.
