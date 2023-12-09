import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';

interface CustomPaginationPropsType {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  loading: boolean;
  onBackBtnClick: () => void;
  onNextBtnClick: () => void;
}
export default function CustomPagination({
  hasNextPage,
  hasPreviousPage,
  onBackBtnClick,
  onNextBtnClick,
  loading,
}: CustomPaginationPropsType) {
  return (
    <div className='flex gap-4 px-10 justify-end  w-full py-6'>
      <div
        data-testid={'previous-page-pagination-btn'}
        onClick={onBackBtnClick}
        className={`bg-gray-300 ${
          !hasPreviousPage || loading
            ? 'cursor-not-allowed'
            : 'cursor-pointer '
        } shadow-lg  w-[50px] h-[50px] rounded-full flex justify-center items-center text-sm`}
      >
        <AiOutlineArrowLeft size={24} />
      </div>
      <div
        onClick={onNextBtnClick}
        data-testid={'next-page-pagination-btn'}
        className={`bg-gray-300 ${
          !hasNextPage || loading
            ? 'cursor-not-allowed'
            : 'cursor-pointer '
        } shadow-lg  w-[50px] h-[50px] rounded-full flex justify-center items-center text-sm`}
      >
        <AiOutlineArrowRight size={24} />
      </div>
    </div>
  );
}
