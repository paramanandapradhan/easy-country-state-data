# easy-country-state-data
Library to provide state/province data with name, _id, and countryId

## Install 

```bash
npm i @cloudparker/easy-country-state-data
```

## CDN install

```html
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-country-state-data@main/dist/index.js"></script>
```

## Usage

### Node.js / ES Modules
```js
import { getStates, getState } from "@cloudparker/easy-country-state-data";

// Get list of states of all countries
getStates();
// Returns: [ { _id: "US:AK", name: "Alaska", countryId: "US" }, ... , { _id: "IN:AP", name: "Andhra Pradesh", countryId: "IN" }, ... ]

// Get list of states of a specific country (e.g., India)
getStates('IN');
// Returns: [ { _id: "IN:AP", name: "Andhra Pradesh", countryId: "IN" }, ... ]

// Get a specific state by ID
getState('IN:AP');
// Returns: { _id: "IN:AP", name: "Andhra Pradesh", countryId: "IN" }

// Get state with invalid or missing ID
getState();
// Returns: null
```

### Browser
```html
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-country-state-data@main/dist/index.js"></script>

<script>
// Get list of states of all countries
EasyCountryStateData.getStates();
// Returns: [ { _id: "US:AK", name: "Alaska", countryId: "US" }, ... , { _id: "IN:AP", name: "Andhra Pradesh", countryId: "IN" }, ... ]

// Get list of states of a specific country (e.g., India)
EasyCountryStateData.getStates('IN');
// Returns: [ { _id: "IN:AP", name: "Andhra Pradesh", countryId: "IN" }, ... ]

// Get a specific state by ID
EasyCountryStateData.getState('IN:AP');
// Returns: { _id: "IN:AP", name: "Andhra Pradesh", countryId: "IN" }
</script>
```

## API

### `getStates(countryId?: string): State[]`
Returns an array of states. If `countryId` is provided, returns only states for that country.

### `getState(stateId?: string): State | null`
Returns a single state object by state ID, or `null` if not found or no ID provided.

### `State` Type
```typescript
{
    _id: string;        // Unique state identifier (e.g., "IN:AP")
    name: string;       // State/province name (e.g., "Andhra Pradesh")
    countryId: string;  // Country identifier (e.g., "IN")
}
```
