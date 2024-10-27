import { useFetch } from './useFetch';
import { apiUrl } from '../components/Overview/Overview';

describe('useFetch', () => {
	const mockData = [
		{
			id: 1,
			name: 'Test Item',
		},
	];

	beforeEach(() => {
		global.fetch = jest.fn().mockResolvedValue({
			ok: true,
			json: jest.fn().mockResolvedValue(mockData),
		});
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('should set loading to true initially', async () => {
		const { result } = renderHook(() => useFetch(apiUrl));

		expect(result.current.loading).toBe(true);
		expect(result.current.results).toBe(null);
		expect(result.current.error).toBe(null);
	});

	it('should fetch data successfully', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch(apiUrl));

		await waitForNextUpdate();

		expect(global.fetch).toHaveBeenCalledWith(apiUrl);
		expect(result.current.loading).toBe(false);
		expect(result.current.results).toEqual(mockData);
		expect(result.current.error).toBe(null);
	});

	it('should handle fetch error', async () => {
		global.fetch = jest.fn().mockRejectedValue(new Error('Fetch failed'));

		const { result, waitForNextUpdate } = renderHook(() => useFetch(apiUrl));

		await waitForNextUpdate();

		expect(global.fetch).toHaveBeenCalledWith(apiUrl);
		expect(result.current.loading).toBe(false);
		expect(result.current.results).toBe(null);
		expect(result.current.error).toEqual(new Error('Fetch failed'));
	});

	it('should not fetch data if url is empty', async () => {
		const { result } = renderHook(() => useFetch(''));

		expect(result.current.loading).toBe(true);
		expect(result.current.results).toBe(null);
		expect(result.current.error).toBe(null);
		expect(global.fetch).not.toHaveBeenCalled();
	});
});
